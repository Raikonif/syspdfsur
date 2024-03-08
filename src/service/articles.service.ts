import { serviceJson, serviceAPI } from "~/service/index";
import { Article, ArticleSlide, Author } from "~/interfaces/Article.interface";

const getArticles = async (): Promise<Article[]> => {
  const response = await serviceAPI.get<Article[]>("/api/v1/articles/");
  return response.data || [];
};

const getArticlesSlides = async (): Promise<ArticleSlide[]> => {
  const response = await serviceAPI.get<ArticleSlide[]>("/api/v1/articles_slides/");
  return response.data || [];
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
