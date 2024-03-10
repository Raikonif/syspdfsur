import { serviceAPI } from "~/service/index";
import { Article, ArticleSlide } from "~/interfaces/Article.interface";
import { AxiosResponse } from "axios";

const getArticles = async (): Promise<AxiosResponse<Article[]>> => {
  return await serviceAPI.get<Article[]>("/api/v1/articles/");
};

const getArticlesSlides = async (): Promise<AxiosResponse<ArticleSlide[]>> => {
  return await serviceAPI.get<ArticleSlide[]>("/api/v1/articles_slides/");
};

const getArticlesSlidesByArticle = async (id: number): Promise<ArticleSlide[]> => {
  const response = await serviceAPI.get<ArticleSlide[]>(`/api/v1/articles/${id}/articles_slides`);
  return response.data || [];
};

const getArticle = async (id: number): Promise<Article> => {
  const response = await serviceAPI.get<Article>(`/articles/${id}`);
  return response.data || {};
};

export { getArticles, getArticle, getArticlesSlides, getArticlesSlidesByArticle };
