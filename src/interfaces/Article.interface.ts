export interface Article {
  id: number;
  title: string;
  date: string;
  author_id: number;
  type: string;
}

export interface ExtendedAuthorAndSlideForArticle extends Article {
  author: Author;
  article_slides: ArticleSlide[];
}

export interface ArticleSlide {
  id: number;
  article: number;
  url: string;
  description: string;
}

export enum AuthorGender {
  "female",
  "male",
}

export interface Author {
  id: number;
  full_name: string;
  gender: AuthorGender;
  mention: string;
  avatar: string;
  email: string;
  twitter: string;
  phone: string;
  facebook: string;
}

export interface IArticle {
  id: number;
  title: string;
  date: string;
  type: string;
  article_slides: ArticleSlide[];
  author: Author;
}
