import React, { ReactElement } from "react";

interface ArticlePageProps {
    title: string;
    content: string;
    date: string;
    image: string;
    link: string;
}

function ArticlePage(): ReactElement {
  return (
    <div className="flex h-full w-full flex-col">
      <h1 className=""></h1>
    </div>
  );
}

export default ArticlePage;
