import { Author } from "~/interfaces/Article.interface";
import { serviceAPI } from "~/service/index";
import { AxiosResponse } from "axios";

const getAuthors = async (): Promise<AxiosResponse<Author[]>> => {
  return await serviceAPI.get<Author[]>("/api/v1/authors/");
};
const getAuthor = async (id: number): Promise<AxiosResponse<Author>> => {
  return await serviceAPI.get<Author>(`/api/v1/authors/${id}`);
};

export { getAuthors, getAuthor };
