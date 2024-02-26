import React, { ReactElement, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import { Article } from "~/interfaces/Article.interface";
import Header from "~/pages/articles/components/Header";
import ModalDeleteItem from "~/components/ModalDeleteItem";
import Paginator from "~/components/Paginator";
import { BiPlusMedical } from "react-icons/all";
import ModalEditArticle from "~/pages/articles/components/modals/ModalEditArticle";

function ArticlesPage(): ReactElement {
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(true);
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
      <div className="flex h-full flex-col justify-between pt-10 sm:pt-0">
        <div className="flex flex-col">
          <Header setShowModal={setCreateModal} showModal={createModal} />
          <ArticlesList
            articles={articles}
            showShowModal={handleModalEdit}
            showDeleteModal={handleModalDelete}
            showEditModal={handleModalEdit}
          />
        </div>
        <div className="my-5">
          <Paginator />
        </div>
      </div>
      <button
        className="fixed bottom-6 right-6 h-[50px] w-[50px] sm:hidden"
        onClick={() => setCreateModal(true)}
      >
        <BiPlusMedical className="h-[50px] w-[50px] rounded-full bg-violet-600 p-2 text-center text-white" />
      </button>
      {/*<div className="fixed mt-2 flex w-full items-end justify-end px-3 sm:hidden">*/}
      {/*  <Search />*/}
      {/*</div>*/}
      {createModal && <ModalCreateArticle onClose={handleModalCreate} refModal={refModalCreate} />}
      {deleteModal && (
        <ModalDeleteItem
          onClose={handleModalDelete}
          refModal={refModalDelete}
          confirmDelete={handleConfirmDelete}
        />
      )}
      {editModal && (
        <ModalEditArticle
          onClose={handleModalEdit}
          refModal={refModalEdit}
          onEdit={setEdit}
          edit={edit}
        />
      )}
      {showModal && (
        <ModalEditArticle
          onClose={handleModalShow}
          refModal={refModalEdit}
          onEdit={setEdit}
          edit={edit}
        />
      )}
    </>
  );
}

export default ArticlesPage;
