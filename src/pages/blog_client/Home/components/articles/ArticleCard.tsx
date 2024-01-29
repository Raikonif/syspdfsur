import React, { useEffect, useState } from "react";
import { Article, Image } from "~/interfaces/Article.interface";
import default_image from "~/assets/default_image.jpg";
function ArticleCard({ id, title, author, date, content, images, type }: Article) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageSrcLoaded, setImageSrcLoaded] = useState<string>("");
  const slicedContent = content.slice(0, 80) + " ...";
  const image: Image = images[0];
  const openArticle = () => {
    const articleUrl = `/article/${encodeURIComponent(id)}`;
    window.open(articleUrl, "_blank");
  };

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(image.url);
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
      className="my-4 flex w-full cursor-pointer flex-col rounded-md border-2 bg-white p-4 pt-7 shadow-2xl dark:border-slate-600 dark:bg-slate-700 dark:text-white"
      onClick={openArticle}
    >
      <h2 className="font-bold">{title}</h2>
      <p className="font-semibold text-slate-400 dark:text-slate-300">{date}</p>
      <h3 className="font-semibold text-violet-600 dark:text-fuchsia-500">{author}</h3>
      <p className="mb-2 mt-1">{slicedContent}</p>

      {!isLoading ? (
        <img
          src={imageSrcLoaded}
          alt={String(image.id)}
          className="max-h-[200px] w-full rounded-md border-2"
        />
      ) : (
        <img
          src={default_image}
          alt={"default_image"}
          className="max-h-[200px] w-full rounded-md border-2"
        />
      )}
    </article>
  );
}

export default ArticleCard;
