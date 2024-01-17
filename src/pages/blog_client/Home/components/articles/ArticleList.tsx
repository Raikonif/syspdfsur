import React from "react";
import { Article } from "~/interfaces/Article.interface";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
}
function ArticleList({ articles }: ArticleListProps) {
  const articlesLength = articles.length;
  return (
    <>
      <ul className="mx-3 grid sm:grid-cols-2 lg:grid-cols-3">
        {articlesLength > 0 &&
          articles.map((article: Article) => (
            <li className="mx-2" key={article.id}>
              <ArticleCard
                id={article.id}
                title={article.title}
                author={article.author}
                content={article.content}
                date={article.date}
                images={article.images}
                type={article.type}
              />
            </li>
          ))}
      </ul>
      {articlesLength === 0 && (
        <div className="mt-10 flex w-full items-center justify-center">
          <h1 className="h-full w-full text-center text-2xl">No se encontraron artículos</h1>
        </div>
      )}
    </>
  );
}

export default ArticleList;
