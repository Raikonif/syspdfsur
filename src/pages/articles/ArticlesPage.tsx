import React, { ReactElement, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import { BiPlusMedical } from "react-icons/all";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import { Article } from "~/interfaces/Article.interface";

function ArticlesPage(): ReactElement {
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const refModalCreate = React.useRef<HTMLDivElement>(null);
  const handleModalCreate = (newState: boolean) => {
    setShowModal(newState);
  };
  return (
    <>
      <div className="flex justify-end border-b-2 bg-slate-50 py-5 backdrop-blur-sm backdrop-opacity-50 sm:pr-16">
        <button
          onClick={() => setShowModal(!showModal)}
          className="flex rounded-md bg-indigo-600 p-2 text-white"
        >
          <p>Crear Artículo </p>
          <BiPlusMedical className="m-1 mr-2 text-white" />
        </button>
      </div>
      <div className="h-full w-full flex-row sm:flex">
        <ArticlesList
          articles={articles}
          showCreateModal={handleModalCreate}
          showDeleteModal={handleModalCreate}
          showEditModal={handleModalCreate}
        />
      </div>
      {showModal && <ModalCreateArticle onClose={handleModalCreate} refModal={refModalCreate} />}
    </>
  );
}

export default ArticlesPage;
