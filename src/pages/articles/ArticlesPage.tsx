import React, { ReactElement, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import { BiPlusMedical } from "react-icons/all";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import { Article } from "~/interfaces/Article.interface";
import Header from "~/pages/articles/components/Header";

function ArticlesPage(): ReactElement {
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const refModalCreate = React.useRef<HTMLDivElement>(null);
  const handleModalCreate = (newState: boolean) => {
    setShowModal(newState);
  };
  return (
    <>
      <Header setShowModal={setShowModal} showModal={showModal} />
      <div className="w-full flex-row sm:flex">
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
