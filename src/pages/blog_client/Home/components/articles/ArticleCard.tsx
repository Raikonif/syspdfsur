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
      className="my-4 flex w-full cursor-pointer flex-col rounded-md border bg-white p-4 pt-7 shadow-xl"
      onClick={openArticle}
    >
      <h2 className="font-bold">{title}</h2>
      <p className="font-[Arial] font-bold text-slate-400">{date}</p>
      <h3 className="font-[Arial] font-bold text-violet-600">{author}</h3>
      <p className="m-2 font-[Arial]">{slicedContent}</p>
      <img
        src={image.url}
        alt={String(image.id)}
        className="max-h-[200px] w-full rounded-md border-2"
      />
    </article>
  );
}

export default ArticleCard;
