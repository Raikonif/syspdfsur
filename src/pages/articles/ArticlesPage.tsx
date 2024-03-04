import React, { ReactElement, useEffect, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import {
  Article,
  ArticleSlide,
  Author,
  ExtendedArticle,
  IArticle,
} from "~/interfaces/Article.interface";
import Header from "~/pages/articles/components/Header";
import ModalDeleteItem from "~/components/ModalDeleteItem";
import Paginator from "~/components/Paginator";
import { BiPlusMedical } from "react-icons/all";
import ModalEditArticle from "~/pages/articles/components/modals/ModalEditArticle";
import ArticlesSlider from "~/pages/articles/components/ArticlesSlider";
import ArticleSliderSwiper from "~/pages/articles/components/ArticleSliderSwiper";
import ModalShow from "~/pages/diagnoses/components/modals/ModalShow";
import modalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import {
  getArticle,
  getArticles,
  getArticlesSlides,
  getArticlesSlidesByArticle,
  getAuthor,
  getAuthors,
} from "~/service/articles.service";

function ArticlesPage(): ReactElement {
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [authors, setAuthors] = useState<Author[]>([] as Author[]);
  const [articleSlides, setArticleSlides] = useState<ArticleSlide[]>([] as ArticleSlide[]);
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
  const [articlesComplete, setArticlesComplete] = useState<IArticle[]>([] as IArticle[]);
  const handleOpenClose = (newState: boolean) => {
    setEditModal(newState);
    setCreateModal(newState);
    setShowModal(newState);
  };

  useEffect(() => {
    const articles = getArticles();
    const authors = getAuthors();
    const articleSlides = getArticlesSlides();
    const fetchCompleteArticles = async () => {
      const [articlesData, authorsData, articlesSlidesData] = await Promise.all([
        articles,
        authors,
        articleSlides,
      ]);
      const articlesCompose = articlesData.map((article) => {
        const author = authorsData.find((author: Author) => author.id === article.id);
        const slides = articlesSlidesData.filter(
          (slide: ArticleSlide) => slide.article === article.id,
        );
        return {
          ...article,
          author: author || null,
          article_slides: slides,
        };
      });
      setArticlesComplete(articlesCompose);
      console.log("ARTICLES COMPLETE", articlesComplete);
    };
    fetchCompleteArticles();
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
            articles={articlesComplete}
            showShowModal={setShowModal}
            showDeleteModal={setDeleteModal}
            showEditModal={setEditModal}
          />
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
