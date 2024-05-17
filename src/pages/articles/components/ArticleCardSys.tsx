import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { IArticle } from "~/interfaces/Article.interface";

interface ArticleCardSysProps {
  article: IArticle;
  setModalEdit: (newState: boolean) => void;
  setModalShow: (newState: boolean) => void;
  setModalDelete: (newState: boolean) => void;
}

function ArticleCardSys({
  article,
  setModalShow,
  setModalEdit,
  setModalDelete,
}: ArticleCardSysProps): ReactElement {
  const { t } = useTranslation();
  return (
    <article
      className="m-2 flex max-h-[200px] max-w-md cursor-pointer flex-col rounded-md border-y border-l-8 border-fuchsia-600 shadow-md sm:mx-2 sm:my-3"
      onClick={() => setModalShow(true)}
    >
      <div className="flex w-full flex-col justify-between">
        <div className="flex h-full w-full flex-col justify-between p-4">
          <header className="mb-2 mt-1 border-b border-fuchsia-600 pb-1 text-center font-semibold">
            {article.title}
          </header>
          <p className="text-sm font-semibold text-slate-500">{article.created_at}</p>
          <p className="font-semibold">
            {article
              ? `${article.author?.mention} ${article.author?.full_name}`
              : "Autor desconocido"}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className="mx-2 mb-2 rounded-md bg-violet-600 px-4 py-1 text-white hover:bg-violet-500"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setModalEdit(true);
              event.stopPropagation();
            }}
          >
            {t("EDIT")}
          </button>
          <button
            className="mx-2 mb-2 rounded-md bg-red-600 px-4 py-1 text-white hover:bg-red-500"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setModalDelete(true);
              event.stopPropagation();
            }}
          >
            {t("DELETE")}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ArticleCardSys;
