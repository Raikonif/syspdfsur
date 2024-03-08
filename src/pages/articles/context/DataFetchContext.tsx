import React, { createContext } from "react";
import { Article, ArticleSlide, Author } from "~/interfaces/Article.interface";

export interface FetchState<T> {
  data: T;
  loading: boolean;
  error: boolean;
}

export interface ArticlesProviderData {
  authors: FetchState<Author[]>;
  articles: FetchState<Article[]>;
  slides: FetchState<ArticleSlide[]>;
}

const DataFetchContext = createContext<ArticlesProviderData>({} as ArticlesProviderData);

export default DataFetchContext;
