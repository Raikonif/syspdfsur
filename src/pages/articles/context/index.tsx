import React, { ReactNode } from "react";
import { Article, ArticleSlide, Author } from "~/interfaces/Article.interface";
import DataFetchContext, { ArticlesProviderData } from "~/pages/articles/context/DataFetchContext";
import useGetData from "~/hooks/useGetData";
import { getAuthors } from "~/service/authors.service";
import { getArticles, getArticlesSlides } from "~/service/articles.service";

interface IProps {
  children: ReactNode;
}

function ArticlesProvider({ children }: IProps) {
  const authorsState = useGetData<Author[]>({ dataToFetch: getAuthors });
  const articlesState = useGetData<Article[]>({ dataToFetch: getArticles });
  const slidesState = useGetData<ArticleSlide[]>({ dataToFetch: getArticlesSlides });

  const contextValue: ArticlesProviderData = {
    authors: authorsState,
    articles: articlesState,
    slides: slidesState,
  };

  return <DataFetchContext.Provider value={contextValue}>{children}</DataFetchContext.Provider>;
}

export default ArticlesProvider;
