import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ArticleSwiperCard from "~/pages/articles/components/ArticleSwiperCard";

import default_image from "~/assets/default_image.jpg";

interface Slide {
  id: number;
  description: string;
  image: string;
}

interface SlideList {
  slides: Slide[];
}
function ArticleSliderSwiper({ slides }: SlideList) {
  const [imageSrcLoaded, setImageSrcLoaded] = useState<string>(default_image);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(slides[0].image);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImageSrcLoaded(objectURL);
        setIsLoading(false);
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
        className="max-w-xs self-start rounded-lg pb-7"
      >
        {slides.map((slide: Slide) => (
          <SwiperSlide key={slide.id} className="rounded-lg bg-white dark:bg-slate-400/60">
            <ArticleSwiperCard
              key={slide.id}
              description={slide.description}
              id={slide.id}
              image={imageSrcLoaded}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ArticleSliderSwiper;
