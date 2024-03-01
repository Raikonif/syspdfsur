import React, { ReactElement, useEffect, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import { Article } from "~/interfaces/Article.interface";
import Header from "~/pages/articles/components/Header";
import ModalDeleteItem from "~/components/ModalDeleteItem";
import Paginator from "~/components/Paginator";
import { BiPlusMedical } from "react-icons/all";
import ModalEditArticle from "~/pages/articles/components/modals/ModalEditArticle";
import ArticlesSlider from "~/pages/articles/components/ArticlesSlider";
import ArticleSliderSwiper from "~/pages/articles/components/ArticleSliderSwiper";
import ModalShow from "~/pages/diagnoses/components/modals/ModalShow";
import modalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import { getArticle, getArticles, getArticlesSlides, getAuthors } from "~/service/articles.service";

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
  const [openClose, setOpenClose] = useState<boolean>(false);
  const [arts, setArts] = useState<any[]>([]);
  const handleOpenClose = (newState: boolean) => {
    setEditModal(newState);
    setCreateModal(newState);
    setShowModal(newState);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const artis = await getArticles();
      const authors = await getAuthors();
      const articlesSlides = await getArticlesSlides();
      console.log(artis);
      console.log(authors);
      console.log(articlesSlides);
    };
    fetchArticles();
  }, []);

  const slides = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis. Lorem Ipsum",
      image: "https://www.w3schools.com/w3images/lights.jpg",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis. Lorem Ipsum",
      image: "https://www.w3schools.com/w3images/nature.jpg",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis. Lorem Ipsum",
      image: "https://www.w3schools.com/w3images/mountains.jpg",
    },
  ];

  return (
    <>
      <div className="flex h-full flex-col justify-between pt-10 sm:pt-0">
        <div className="flex flex-col">
          <Header setShowModal={setCreateModal} showModal={createModal} />
          <ArticlesList
            articles={articles}
            showShowModal={setShowModal}
            showDeleteModal={setDeleteModal}
            showEditModal={setEditModal}
          />
          {/*<ArticleSliderSwiper slides={slides} />*/}
        </div>
        <div className="my-5">
          <Paginator />
        </div>
      </div>
      <button className="fixed bottom-6 right-6 lg:hidden" onClick={() => setCreateModal(true)}>
        <BiPlusMedical
          size={40}
          className="rounded-full bg-violet-600 p-2 text-center text-white"
        />
      </button>
      {/*<div className="fixed mt-2 flex w-full items-end justify-end px-3 sm:hidden">*/}
      {/*  <Search />*/}
      {/*</div>*/}
      {/*{createModal && <ModalCreateArticle onClose={handleModalCreate} refModal={refModalCreate} />}*/}
      {deleteModal && (
        <ModalDeleteItem
          onClose={setDeleteModal}
          refModal={refModalDelete}
          confirmDelete={setConfirmDelete}
        />
      )}
      {(showModal || createModal || editModal) && (
        <ModalCreateArticle
          onClose={handleOpenClose}
          refModal={refModalCreate}
          create={createModal}
          edit={editModal}
          show={showModal}
          onEdit={setEditModal}
        />
      )}
      {/*{showModal && <ModalCreateArticle onClose={handleModalShow} refModal={refModalCreate} />}*/}
    </>
  );
}

export default ArticlesPage;
