import { SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";

interface Slide {
  id: number;
  description: string;
  image: string;
}
function ArticleSwiperCard({ id, description, image }: Slide) {
  const [imageSrcLoaded, setImageSrcLoaded] = useState<string>("");
  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(image);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImageSrcLoaded(objectURL);
      } catch (error) {
        console.error(error);
      }
    };
    loadImage().then();
  }, [image]);
  return (
    <>
      <div className="">
        <img src={image} alt="..." />
        <input type="file" className="hidden" />
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <h5 className="font-bold dark:text-white">{description}</h5>
        <button className="text-gray self-end px-2 font-bold">READ MORE</button>
      </div>
    </>
  );
}

export default ArticleSwiperCard;
