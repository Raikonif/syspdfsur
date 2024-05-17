import React, { useEffect, useState } from "react";
import { Article, IArticle } from "~/interfaces/Article.interface";
import ArticleCardSys from "~/pages/articles/components/ArticleCardSys";
import { useTranslation } from "react-i18next";

interface ArticlesListProps {
  articles: IArticle[];
  showShowModal: (state: boolean) => void;
  showEditModal: (state: boolean) => void;
  showDeleteModal: (state: boolean) => void;
}

function ArticlesList({
  articles,
  showDeleteModal,
  showEditModal,
  showShowModal,
}: ArticlesListProps) {
  // const [articlesShow, setArticlesShow] = useState<any[]>([]);
  const [articlesLength, setArticlesLength] = useState<number>(0);
  const sliceLg = 6;
  const sliteXl = 8;
  const article = {} as Article;
  const { t } = useTranslation();
  useEffect(() => {
    if (articles.length > 0) setArticlesLength(articles.length);
    // setArticlesShow(articles);
  }, [articles]);
  return (
    <>
      {articlesLength > 0 ? (
        <ul className="my-5 grid content-around px-3 sm:my-2 sm:mt-12 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3 xl:mr-1 xl:grid-cols-4 2xl:mr-0">
          {articles.map((article: IArticle) => (
            <ArticleCardSys
              key={article.id}
              article={article}
              setModalDelete={showDeleteModal}
              setModalEdit={showEditModal}
              setModalShow={showShowModal}
            />
          ))}
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
