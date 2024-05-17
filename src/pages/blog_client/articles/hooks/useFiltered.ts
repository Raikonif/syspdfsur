import { useEffect } from "react";
import { ALL, CITHOLOGY, HISTOPATHOLOGY, PAP } from "~/constants/Blog/blog.constants";
import { Article } from "~/interfaces/Article.interface";

interface IUseFiltered {
  articles: Article[];
  changeFilter: string;
  setArticlesFiltered: (articles: Article[]) => void;
}
function useFiltered({ articles, changeFilter, setArticlesFiltered }: IUseFiltered) {
  useEffect(() => {
    if (Array.isArray(articles) && articles.length > 0) {
      changeFilter !== ALL
        ? setArticlesFiltered(
            articles.filter((article) => article.type.toUpperCase() === changeFilter),
          )
        : setArticlesFiltered(articles);
    }
  }, [articles, changeFilter]);
}

export default useFiltered;
