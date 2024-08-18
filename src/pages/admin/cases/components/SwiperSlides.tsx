import React, { useContext, useEffect } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaEdit, FaSave, FaTrash } from "react-icons/fa";
import NewSlide from "~/pages/admin/cases/components/NewSlide";
import toast from "react-hot-toast";
import processAndUploadSlides from "~/helpers/processAndUploadSlides";
import { OpSlidePreview } from "~/interfaces/Case.interface";
import {
  deleteSlideCase,
  getAllSlidesCases,
  getSlideFromCase,
} from "~/service/supabase/slides.service";
import { getAllCases } from "~/service/supabase/cases.service";
import { CREATE, SEE } from "~/constants";
import { list } from "postcss";

function SwiperSlides() {
  const {
    listSlidesPreview,
    setListSlidesPreview,
    swiperRef,
    currentId,
    setLoading,
    setLoadingAttributes,
    onCloseCase,
    setChangeSection,
    selectedKey,
    crudColor,
    setCurrentSlideInfo,
    currentSlideInfo,
    onOpenDelete,
    setNameDelete,
  } = useContext(AdminContext);

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const currentIndex = swiperRef.current.swiper.activeIndex;
      const currentSlide = listSlidesPreview[currentIndex];
      if (currentSlide) {
        setCurrentSlideInfo(currentSlide);
      }
      console.log("currentSlide", currentSlideInfo.id);
      console.log("currentIndex", currentSlide);
    } else {
      console.log("no swiperRef");
    }
  };

  const getCurrentSlides = async () => {
    const { data, error } = await getSlideFromCase(currentId);
    if (data) {
      setListSlidesPreview(data);
    } else {
      console.error("Error getting slides", error);
    }
  };

  const uploadSlides = async () => {
    setLoadingAttributes({
      message: "Subiendo slides",
      color: "secondary",
    });
    setLoading(true);
    try {
      const { data, error } = await processAndUploadSlides(listSlidesPreview, currentId);
      if (data) {
        toast.success("Slides creados");
        console.log("response slides uploaded", data);
      } else {
        toast.error("Error al crear los slides");
        console.log("Error response", error);
      }
    } catch (error) {
      console.error("Error uploading slides:", error);
      toast.error("Error durante la subida de slides");
    } finally {
      setListSlidesPreview([] as OpSlidePreview[]);
      setChangeSection(false);
      setLoading(false);
      await getAllSlidesCases();
      await getAllCases();
    }
  };

  const editSlides = async () => {
    setLoadingAttributes({
      message: "Editando slides",
      color: "primary",
    });
    setLoading(true);
    try {
      const { data, error } = await processAndUploadSlides(listSlidesPreview, currentId);
      if (data) {
        toast.success("Slides editados");
        console.log("response slides edited", data);
      } else {
        toast.error("Error al editar los slides");
        console.log("Error response", error);
      }
    } catch (error) {
      console.error("Error uploading slides:", error);
      toast.error("Error durante la edición de slides");
    } finally {
      setListSlidesPreview([] as OpSlidePreview[]);
      setChangeSection(false);
      setLoading(false);
      await getAllSlidesCases();
      await getAllCases();
    }
  };

  const handleOpenDelete = () => {
    onOpenDelete();
    setNameDelete("Slide");
  };

  return (
    <div className="flex h-full w-full flex-col py-1">
      {listSlidesPreview.length > 0 && listSlidesPreview ? (
        <h2 className="pb-2 text-center text-xl font-semibold">Slides</h2>
      ) : (
        <h2 className="pb-2 text-center text-xl font-semibold">No Hay Slides</h2>
      )}
      <Swiper
        ref={swiperRef}
        direction={"horizontal"}
        pagination={{
          type: "fraction",
        }}
        grabCursor={true}
        loop={true}
        navigation={true}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        className="flex w-full flex-col items-center justify-center"
      >
        {listSlidesPreview.length > 0 &&
          listSlidesPreview &&
          listSlidesPreview.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideForModal data={slide} index={index} />
            </SwiperSlide>
          ))}
        {selectedKey !== SEE && (
          <SwiperSlide>
            <NewSlide />
          </SwiperSlide>
        )}
      </Swiper>
      <div
        className={`${
          listSlidesPreview.length <= 1 && selectedKey === SEE && "hidden"
        } my-2 flex w-full flex-col justify-center gap-1.5`}
      >
        <Button
          onPress={handleOpenDelete}
          variant="shadow"
          color="danger"
          size={"sm"}
          className={`${selectedKey === CREATE || selectedKey === SEE ? "hidden" : ""} w-full`}
        >
          Borrar Slide <FaTrash />
        </Button>
      </div>
      <div
        className={`${
          listSlidesPreview.length <= 1 && selectedKey === SEE && "hidden"
        } my-2 flex w-full justify-center gap-1.5`}
      >
        <Button
          onPress={() => prevSlide()}
          variant="shadow"
          color="primary"
          size={"sm"}
          className={"col-span-1 w-full"}
        >
          <FaArrowLeft /> Anterior Slide
        </Button>
        <Button
          onPress={() => nextSlide()}
          variant="shadow"
          color="primary"
          size={"sm"}
          className={"col-span-1 w-full"}
        >
          Siguiente Slide <FaArrowRight />
        </Button>
      </div>
      <Button
        color={crudColor}
        size={"sm"}
        variant={"shadow"}
        className={`${selectedKey === SEE || listSlidesPreview.length === 0 ? "hidden" : ""}`}
        onPress={async () => {
          await uploadSlides();
          onCloseCase();
        }}
      >
        Guardar los Slides <FaSave />
      </Button>
    </div>
  );
}

export default SwiperSlides;
