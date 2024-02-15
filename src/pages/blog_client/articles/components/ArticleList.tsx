import React, { useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import ArticleCard from "./ArticleCard";
import { useTranslation } from "react-i18next";
import { number } from "prop-types";

interface ArticleListProps {
  articles: Article[];
}
function ArticleList({ articles }: ArticleListProps) {
  const { t } = useTranslation();
  const [articlesLength, setArticlesLength] = useState<number>(0);
  useEffect(() => {
    if (articles.length > 0) setArticlesLength(articles.length);
  }, [articles]);

  return (
    <>
      <ul className="mt-2 grid px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articlesLength > 0 &&
          articles.map((article: Article) => (
            <li key={article.id} className="mx-2">
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
      {articlesLength < 1 && (
        <div className="mt-10 flex w-full text-center">
          <h1 className="h-full w-full text-2xl dark:text-white">{t("ARTICLES_NOT_FOUND")}</h1>
        </div>
      )}
    </>
  );
}

export default ArticleList;
