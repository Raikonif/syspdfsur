import React, { ReactElement } from "react";

interface ArticlePageProps {
  title: string;
  content: string;
  date: string;
  images: string[];
  author: string;
}

function ArticlePage({ title, content, date, images, author }: ArticlePageProps): ReactElement {
  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="">{title}</h1>
      <ul className="flex flex-col">
        {images.map((item: string) => (
          <img src={item} alt={title} key={item} />
        ))}
      </ul>
      <h3>{date}</h3>
      <p className="">{content}</p>
      <address>{author}</address>
    </div>
  );
}

export default ArticlePage;
