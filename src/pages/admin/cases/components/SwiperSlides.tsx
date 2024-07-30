import React, { useContext, useRef } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { Button } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewSlide from "~/pages/admin/cases/components/NewSlide";
import { SlidePreview } from "~/interfaces/Case.interface";
function SwiperSlides() {
  const { listSlidesPreview, isCreated, setIsCreated, selectedKey } = useContext(AdminContext);
  const swiperRef = useRef(null);

  const goToLastSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(listSlidesPreview.length);
    }
  };
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        direction={"horizontal"}
        pagination={{
          type: "fraction",
        }}
        grabCursor={true}
        loop={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={true}
        modules={[EffectCreative, Pagination]}
        className="flex w-full flex-col items-center justify-center"
      >
        {/*{listSlidesPreview.length > 0 ? (*/}
        {/*  listSlidesPreview.map((slide, index) => (*/}
        {/*    <SwiperSlide key={index}>*/}
        {/*      <SlideForModal data={slide} />*/}
        {/*    </SwiperSlide>*/}
        {/*  ))*/}
        {/*) : (*/}
        <SwiperSlide>
          {/*<SlideForModal data={{} as SlidePreview} />*/}
          <NewSlide />
        </SwiperSlide>
        {/*// )}*/}
      </Swiper>
      <div
        className={`${
          listSlidesPreview.length === 0 ? "hidden" : "flex"
        } my-2 w-full justify-center gap-1.5`}
      >
        <Button
          onPress={() => handlePrev()}
          variant="shadow"
          color="primary"
          size={"sm"}
          className={`${selectedKey === "create" && "hidden"} col-span-1 w-full`}
        >
          <FaArrowLeft /> Anterior
        </Button>
        <Button
          onPress={() => handleNext()}
          variant="shadow"
          color="primary"
          size={"sm"}
          className={`${selectedKey === "create" && "hidden"} col-span-1 w-full`}
        >
          Siguiente <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default SwiperSlides;
