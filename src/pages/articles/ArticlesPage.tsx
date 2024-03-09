import React, { ReactElement, useContext, useEffect, useState } from "react";
import ModalCreateArticle from "~/pages/articles/components/modals/ModalCreateArticle";
import ArticlesList from "~/pages/articles/components/ArticlesList";
import { Article, ArticleSlide, Author, IArticle } from "~/interfaces/Article.interface";
import Header from "~/pages/articles/components/Header";
import ModalDeleteItem from "~/components/ModalDeleteItem";
import Paginator from "~/components/Paginator";
import { BiPlusMedical } from "react-icons/all";
import DataFetchContext from "~/pages/articles/context/DataFetchContext";

function ArticlesPage(): ReactElement {
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
  const { articles, authors, slides } = useContext(DataFetchContext);

  const handleOpenClose = (newState: boolean) => {
    setEditModal(newState);
    setCreateModal(newState);
    setShowModal(newState);
  };

  useEffect(() => {
    const fetchCompleteArticles = async () => {
      const articlesCompose = articles.data.map((article: Article) => {
        const author = authors.data.find((author: Author) => author.id === article.author);
        const slide = slides.data.filter((slide: ArticleSlide) => slide.article === article.id);
        return {
          ...article,
          author: author || null,
          article_slides: slide || null,
        };
      });
      setArticlesComplete(articlesCompose);
    };
    fetchCompleteArticles();
  }, [authors, articles, slides]);

  return (
    <>
      <div className="flex h-full flex-col justify-between pt-10 sm:pt-0">
        <div className="flex flex-col">
          <Header setShowModal={setCreateModal} showModal={createModal} />
          {articles.loading || authors.loading || (slides.loading && <p>{"Loading ..."}</p>)}
          {articles.error || authors.error || (slides.error && <p>{"Error"}</p>)}
          {articlesComplete && (
            <ArticlesList
              articles={articlesComplete}
              showShowModal={setShowModal}
              showDeleteModal={setDeleteModal}
              showEditModal={setEditModal}
            />
          )}
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
          authors={authors}
          create={createModal}
          edit={editModal}
          show={showModal}
          onEdit={setEditModal}
        />
      )}
    </>
  );
}

export default ArticlesPage;
