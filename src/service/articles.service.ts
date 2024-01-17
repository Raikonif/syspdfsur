import { serviceJson } from "~/service/index";
import { Article } from "~/interfaces/Article.interface";

const getArticles = async (): Promise<Article[]> => {
  const response = await serviceJson.get<Article[]>("/articles");
  return response.data || [];
};

const getArticle = async (id: number): Promise<Article> => {
  const response = await serviceJson.get<Article>(`/articles/${id}`);
  return response.data || {};
};

export { getArticles, getArticle };
