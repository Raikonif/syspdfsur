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
import { OpSlidePreview } from "~/interfaces/Case.interface";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import convertToWebp from "~/helpers/convertToWebp";
import ProgressCircle from "~/components/ProgressCircle";
import fillPreviewSlides from "~/helpers/fillPreviewSlides";
import useUploadSlidesData from "~/hooks/useUploadSlidesData";
function SwiperSlides() {
  const { listSlidesPreview, swiperRef, setCaseSlideData, caseSlideData, loading, setLoading } =
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

  const handleFillSlideData = async (slide: OpSlidePreview) => {
    try {
      const webpFile = await convertToWebp(slide.image_file);
      const imageFullQuality = await uploadDigitalOceanImg(slide.image_file);
      const imageLowQuality = await uploadDigitalOceanImg(webpFile);
      console.log("response", imageFullQuality, imageLowQuality);
      if (imageFullQuality.data.image_url && imageLowQuality.data.image_url) {
        setTimeout(() => {
          setCaseSlideData([
            ...caseSlideData,
            {
              case_id: "80bb97d1-5156-44ec-aedc-801ad7ea65fa",
              image_url: imageFullQuality.data.image_url,
              image_url_webp: imageLowQuality.data.image_url_webp,
              title: slide.title,
              description: slide.description,
            },
          ]);
        }, 1000);
        console.log("case slide updated");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const upSlides = async () => {
    await Promise.all(listSlidesPreview.map((slide) => useUploadSlidesData(slide)));
  };

  const uploadSlides = async () => {
    setLoading(true);
    // await Promise.all(listSlidesPreview.map((slide) => handleFillSlideData(slide)));
    try {
      const { data, error } = await fillPreviewSlides(listSlidesPreview);
      if (data) {
        toast.success("Slides creados");
        console.log("response slides uploaded", data);
      } else {
        toast.error("Error al crear los slides");
        console.log("Error response", error);
      }
      // if (slideLists.length > 0) {
      //   setCaseSlideData(slideLists);
      //   console.log("cases slides to Upload: ", slideLists);
      //
      //   // Uploading the slide data after setting the state
      //   const { data, error } = await createSlideCase(slideLists);
      //   if (data) {
      //     toast.success("Slides creados");
      //     console.log("response slides uploaded", data);
      //   } else {
      //     toast.error("Error al crear los slides");
      //     console.log("Error response", error);
      //   }
      // }
    } catch (error) {
      console.error("Error uploading slides:", error);
      toast.error("Error durante la subida de slides");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("listSlidesPreview", listSlidesPreview);
  }, [listSlidesPreview]);

  useEffect(() => {
    console.log("caseSlideData", caseSlideData);
  }, [caseSlideData]);

  return (
    <div className="flex h-full w-full flex-col py-1">
      {loading && <ProgressCircle text={"Subiendo Slides"} color={"secondary"} />}
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
          onPress={async () => await uploadSlides()}
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
