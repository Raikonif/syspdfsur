import React, { useContext, useEffect } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaSave, FaTrash } from "react-icons/fa";
import NewSlide from "~/pages/admin/cases/components/NewSlide";
import toast from "react-hot-toast";
import processAndUploadSlides from "~/helpers/processAndUploadSlides";
import { OpSlidePreview } from "~/interfaces/Case.interface";
import { getAllSlidesCases } from "~/service/supabase/slides.service";
import { getAllCases } from "~/service/supabase/cases.service";
import { CREATE, EDIT, SEE } from "~/constants";
import listComparativesAndUpdate from "~/helpers/listComparativesAndUpdate";

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
    onOpenDelete,
    setNameDelete,
    listSlidesToCompare,
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
      } else {
        toast.error("Error al crear los slides");
        console.error("Error uploading slides:", error);
      }
    } catch (error) {
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
      await listComparativesAndUpdate({
        comparationList: listSlidesToCompare,
        originalList: listSlidesPreview,
        caseId: currentId,
      });
      toast.success("Slides editados satisfactoriamente");
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

  const handleUploadSelection = async () => {
    if (selectedKey === EDIT) {
      await editSlides();
    }
    if (selectedKey === CREATE) {
      await uploadSlides();
    }
  };

  const handleOpenDelete = () => {
    onOpenDelete();
    setNameDelete("Slide");
  };

  useEffect(() => {
    console.log("listSlidesPreview", listSlidesPreview);
  }, [listSlidesPreview]);

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
          await handleUploadSelection();
          onCloseCase();
        }}
      >
        Guardar los Slides <FaSave />
      </Button>
    </div>
  );
}

export default SwiperSlides;
