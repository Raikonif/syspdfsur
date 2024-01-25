import React from "react";
import { Article } from "~/interfaces/Article.interface";

function ArticleCard({ id, title, author, date, content, images, type }: Article) {
  const slicedContent = content.slice(0, 80) + " ...";
  const image = images[0];
  const openArticle = () => {
    const articleUrl = `/article/${encodeURIComponent(id)}`;
    window.open(articleUrl, "_blank");
  };
  return (
    <article
      className="my-4 flex w-full cursor-pointer flex-col rounded-md border-2 bg-white p-4 pt-7 shadow-2xl dark:border-slate-600 dark:bg-slate-700 dark:text-white"
      onClick={openArticle}
    >
      <h2 className="font-bold">{title}</h2>
      <p className="font-semibold text-slate-400">{date}</p>
      <h3 className="font-semibold text-violet-600 dark:text-fuchsia-500">{author}</h3>
      <p className="mb-2 mt-1">{slicedContent}</p>
      <img
        src={image.url}
        alt={String(image.id)}
        className="max-h-[200px] w-full rounded-md border-2"
      />
    </article>
  );
}

export default ArticleCard;
