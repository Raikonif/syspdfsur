export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  images: Image[];
  type: string;
}

export interface Image {
  id: number;
  url: string;
}
