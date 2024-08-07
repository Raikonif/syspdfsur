import React, { useContext } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaSave } from "react-icons/fa";
import NewSlide from "~/pages/admin/cases/components/NewSlide";
import toast from "react-hot-toast";
import processAndUploadSlides from "~/helpers/processAndUploadSlides";

function SwiperSlides() {
  const { listSlidesPreview, swiperRef, currentId, setLoading, setLoadingAttributes, onCloseCase } =
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
      setLoading(false);
    }
  };

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
              <SlideForModal data={slide} index={index} />
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
          onPress={async () => {
            await uploadSlides();
            onCloseCase();
          }}
        >
          Guardar los Slides <FaSave />
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
