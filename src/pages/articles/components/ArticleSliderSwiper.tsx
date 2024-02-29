import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";
import ArticleSwiperCard from "~/pages/articles/components/ArticleSwiperCard";

interface Slide {
  id: number;
  description: string;
  image: string;
}

interface SlideList {
  slides: Slide[];
}
function ArticleSliderSwiper({ slides }: SlideList) {
  const [imageSrcLoaded, setImageSrcLoaded] = useState<string>("");
  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(slides[0].image);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImageSrcLoaded(objectURL);
      } catch (error) {
        console.error(error);
      }
    };
    loadImage().then();
  }, [slides]);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="col-span-2 max-w-xs self-start rounded-3xl pb-16"
      >
        {slides.map((slide: Slide) => (
          <SwiperSlide
            key={slide.id}
            className="h-fit rounded-3xl border-b-8 border-[#FAF9FD] bg-white dark:border-slate-400 dark:bg-slate-400/60"
          >
            <ArticleSwiperCard
              key={slide.id}
              description={slide.description}
              id={slide.id}
              image={slide.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ArticleSliderSwiper;
