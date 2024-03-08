import { Author } from "~/interfaces/Article.interface";
import { serviceAPI } from "~/service/index";

const getAuthors = async (): Promise<Author[]> => {
  const response = await serviceAPI.get<Author[]>("/api/v1/authors/");
  return response.data || [];
};
const getAuthor = async (id: number): Promise<Author> => {
  const response = await serviceAPI.get<Author>(`/api/v1/authors/${id}`);
  return response.data || {};
};

export { getAuthors, getAuthor };
