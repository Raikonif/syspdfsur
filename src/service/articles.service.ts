import { serviceJson, serviceAPI } from "~/service/index";
import { Article } from "~/interfaces/Article.interface";

const getArticles = async (): Promise<Article[]> => {
  const response = await serviceAPI.get<any[]>("/api/v1/articles/");
  return response.data || [];
};

const getArticle = async (id: number): Promise<Article> => {
  const response = await serviceAPI.get<Article>(`/articles/${id}`);
  return response.data || {};
};

export { getArticles, getArticle };
