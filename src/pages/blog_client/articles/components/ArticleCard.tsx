import React, { useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import default_image from "~/assets/default_image.jpg";
function ArticleCard({ id, title, author, created_at, type }: Article) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageSrcLoaded, setImageSrcLoaded] = useState<string>("");
  const slicedContent = " ...";
  const image = "www.example.com/image.jpg";
  const openArticle = () => {
    const articleUrl = `/article/${encodeURIComponent(id)}`;
    window.open(articleUrl, "_blank");
  };

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
    <article
      className="my-4 flex w-full cursor-pointer flex-col rounded-md border-2 bg-white shadow-2xl dark:border-slate-600 dark:bg-slate-700 dark:text-white"
      onClick={openArticle}
    >
      <div className="w-full p-5">
        <h2 className="mb-1.5 text-lg font-bold">{title}</h2>
        <div className="flex justify-between">
          <h3 className="font-semibold text-violet-600 dark:text-fuchsia-500">{author}</h3>
          <p className="font-semibold text-slate-400 dark:text-slate-300">{created_at}</p>
        </div>
        <p className="mt-1">{slicedContent}</p>
      </div>
      {!isLoading ? (
        <img
          src={imageSrcLoaded}
          alt={String(image)}
          className="max-h-[200px] w-full rounded-b-md"
        />
      ) : (
        <img
          src={default_image}
          alt={"default_image"}
          className="max-h-[200px] w-full rounded-b-md"
        />
      )}
    </article>
  );
}

export default ArticleCard;
