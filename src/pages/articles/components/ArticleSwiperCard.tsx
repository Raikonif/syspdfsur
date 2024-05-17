import React, { useEffect, useState } from "react";
import default_image from "~/assets/default_image.jpg";

interface Slide {
  id: number;
  description: string;
  image: string;
}
function ArticleSwiperCard({ id, description, image }: Slide) {
  const [imageSrcLoaded, setImageSrcLoaded] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isOnEdit = false;
  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(image);
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImageSrcLoaded(objectURL);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    loadImage().then();
  }, [image]);
  return (
    <>
      <div className="">
        {!isLoading ? (
          <img
            src={imageSrcLoaded}
            alt={String(id)}
            className="max-h-[200px] w-full rounded-b-md"
          />
        ) : (
          <img
            src={default_image}
            alt={"default_image"}
            className="max-h-[200px] w-full rounded-b-md"
          />
        )}
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
