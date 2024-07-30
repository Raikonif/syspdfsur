import React, { useContext, useEffect, useRef } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewSlide from "~/pages/admin/cases/components/NewSlide";
import { list } from "postcss";
function SwiperSlides() {
  const { listSlidesPreview, isCreated, setIsCreated, selectedKey, swiperRef } =
    useContext(AdminContext);
  // const swiperRef = useRef(null);
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
  const goToLastSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(listSlidesPreview.length);
    }
  };
  useEffect(() => {
    console.log("listSlidesPreview", listSlidesPreview);
  }, [listSlidesPreview]);
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
          <FaArrowLeft /> Anterior
        </Button>
        <Button
          onPress={() => nextSlide()}
          variant="shadow"
          color="primary"
          size={"sm"}
          className={"col-span-1 w-full"}
        >
          Siguiente <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default SwiperSlides;
