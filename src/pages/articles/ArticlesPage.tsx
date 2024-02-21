import React, { ReactElement, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import { Article } from "~/interfaces/Article.interface";
import Header from "~/pages/articles/components/Header";
import ModalDeleteItem from "~/components/ModalDeleteItem";

function ArticlesPage(): ReactElement {
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const refModalCreate = React.useRef<HTMLDivElement>(null);
  const refModalDelete = React.useRef<HTMLDivElement>(null);
  const refModalEdit = React.useRef<HTMLDivElement>(null);

  const handleModalShow = (newState: boolean) => {
    setShowModal(newState);
  };
  const handleModalCreate = (newState: boolean) => {
    setCreateModal(newState);
  };
  const handleModalDelete = (newState: boolean) => {
    setDeleteModal(newState);
  };
  const handleModalEdit = (newState: boolean) => {
    setEditModal(newState);
  };
  const handleConfirmDelete = (newState: boolean) => {
    setConfirmDelete(newState);
  };

  return (
    <>
      <div className="flex flex-col">
        <Header setShowModal={setCreateModal} showModal={createModal} />
        <ArticlesList
          articles={articles}
          showShowModal={handleModalCreate}
          showDeleteModal={handleModalDelete}
          showEditModal={handleModalDelete}
        />
      </div>
      {createModal && <ModalCreateArticle onClose={handleModalCreate} refModal={refModalCreate} />}
      {deleteModal && (
        <ModalDeleteItem
          onClose={handleModalDelete}
          refModal={refModalDelete}
          confirmDelete={handleConfirmDelete}
        />
      )}
      {editModal && <ModalCreateArticle onClose={handleModalEdit} refModal={refModalEdit} />}
      {showModal && <ModalCreateArticle onClose={handleModalShow} refModal={refModalCreate} />}
    </>
  );
}

export default ArticlesPage;
