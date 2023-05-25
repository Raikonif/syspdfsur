import { createContext } from "react";
import IPostInterface from "~/interfaces/IPostInterface";

export interface IPostContext {
  setPostSelected: (post: IPostInterface) => void;
}
const PostContext = createContext<IPostContext | null>(null);

export default PostContext;
