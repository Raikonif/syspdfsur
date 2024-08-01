import React, { useContext, useEffect, useRef } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaRegSave, FaSave } from "react-icons/fa";
import NewSlide from "~/pages/admin/cases/components/NewSlide";
import { list } from "postcss";
import { createSlideCase } from "~/service/supabase/slides.service";
import toast from "react-hot-toast";
import { CaseSlide, OpCaseSlide } from "~/interfaces/Case.interface";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
function SwiperSlides() {
  const { listSlidesPreview, swiperRef, setCaseSlideData, caseSlideData } =
    useContext(AdminContext);

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
  const handleUploadImage = async (imagePreview: File, index: number) => {
    try {
      const response = await uploadDigitalOceanImg(imagePreview);
      console.log("response", response);
      caseSlideData[index].image_url = response.data.file_url;
      // const newImageUrl = response.data.file_url;
      // setCaseSlideData([...caseSlideData]);
      setCaseSlideData((prevSlides) =>
        prevSlides.map((item, idx) =>
          idx === index ? { ...item, image_url: response.data.image_url } : item,
        ),
      );
      console.log("case slide", caseSlideData);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const uploadSlides = async () => {
    listSlidesPreview.map((slide, index) => handleUploadImage(slide.image_file, index));
    // const { data, error } = await createSlideCase(caseSlideData);
    // if (data) {
    //   toast.success("Slides creados");
    // } else {
    //   toast.error("Error al crear los slides");
    //   return;
    // }
  };

  // const handleCreateConfirm = async (slideData: any) => {
  //   try {
  //     await handleUploadImage();
  //     const { data, error } = await createSlideCase(slideData);
  //     if (data) {
  //       toast.success("Caso creado");
  //     } else {
  //       toast.error("Error al crear el caso");
  //       return;
  //     }
  //     setSlideData({} as OpCaseSlide);
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };

  useEffect(() => {
    console.log("listSlidesPreview", listSlidesPreview);
  }, [listSlidesPreview]);

  useEffect(() => {
    console.log("caseSlideData", caseSlideData);
  }, [caseSlideData]);

  return (
    <div className="flex h-full w-full flex-col py-1">
      {listSlidesPreview.length > 0 && listSlidesPreview ? (
        <h2 className="py-3 text-center text-xl font-semibold">Slides</h2>
      ) : (
        <h2 className="py-3 text-center text-xl font-semibold">No Hay Slides</h2>
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
        className="flex w-full flex-col items-center justify-center"
      >
        {listSlidesPreview.length > 0 &&
          listSlidesPreview &&
          listSlidesPreview.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideForModal data={slide} />
            </SwiperSlide>
          ))}
        <SwiperSlide>
          <NewSlide />
        </SwiperSlide>
      </Swiper>
      {listSlidesPreview.length > 0 && (
        <Button
          color="secondary"
          size={"sm"}
          variant={"shadow"}
          onPress={async () => uploadSlides()}
        >
          Guardar todos los Slides <FaSave />
        </Button>
      )}
      <div
        className={`${
          (listSlidesPreview.length === 0 || !listSlidesPreview) && "hidden"
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
    </div>
  );
}

export default SwiperSlides;
