import React from "react";
import { Article } from "~/interfaces/Article.interface";
import ArticleCard from "./ArticleCard";
import { useTranslation } from "react-i18next";

interface ArticleListProps {
  articles: Article[];
}
function ArticleList({ articles }: ArticleListProps) {
  const { t } = useTranslation();
  const articlesLength = articles.length;
  return (
    <>
      <ul className="grid px-3 sm:grid-cols-2 lg:grid-cols-3">
        {articlesLength > 0 &&
          articles.map((article: Article) => (
            <li key={article.id}>
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
          <h1 className="h-full w-full text-center text-2xl">{t("ARTICLES_NOT_FOUND")}</h1>
        </div>
      )}
    </>
  );
}

export default ArticleList;
