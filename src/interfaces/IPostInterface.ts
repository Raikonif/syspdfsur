interface IPostInterface {
  key: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export interface IPostListInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
}

export default IPostInterface;
