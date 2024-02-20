import React, { useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import ArticleCardSys from "~/pages/articles/components/ArticleCardSys";
import { useTranslation } from "react-i18next";

interface ArticlesListProps {
  articles: Article[];
  showCreateModal: (state: boolean) => void;
  showEditModal: (state: boolean) => void;
  showDeleteModal: (state: boolean) => void;
}

function ArticlesList({
  articles,
  showDeleteModal,
  showEditModal,
  showCreateModal,
}: ArticlesListProps) {
  const [articlesLength, setArticlesLength] = useState<number>(0);
  // useEffect(() => {
  //   if (articles.length > 0) setArticlesLength(articles.length);
  // }, []);
  const { t } = useTranslation();
  return (
    <>
      {articlesLength == 0 ? (
        <ul className="mt-2 grid px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
          <ArticleCardSys />
        </ul>
      ) : (
        <div className="mt-10 flex w-full text-center">
          <h1 className="h-full w-full text-2xl dark:text-white">{t("ARTICLES_NOT_FOUND")}</h1>
        </div>
      )}
    </>
  );
}

export default ArticlesList;
