import { useEffect, useState } from "react";
import { ALL, CITHOLOGY, HISTOPATHOLOGY, PAP } from "~/constants/Blog/blog.constants";
import { Article } from "~/interfaces/Article.interface";
import articles from "~/pages/blog_client/articles/Articles";

function useSearch({
  articles,
  changeSearch,
  changeFilter,
}: {
  articles: Article[];
  changeSearch: string;
  changeFilter: string;
}): Article[] {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([] as Article[]);
  useEffect(() => {
    if (Array.isArray(articles) && articles.length > 0) {
      changeSearch !== "" &&
      changeSearch !== undefined &&
      changeSearch !== null &&
      changeSearch !== " " &&
      changeSearch !== ALL &&
      changeSearch !== PAP &&
      changeSearch !== CITHOLOGY &&
      changeSearch !== HISTOPATHOLOGY
        ? setFilteredArticles(
            articles.filter((article) =>
              article.title.toUpperCase().includes(changeSearch.toUpperCase()),
            ),
          )
        : setFilteredArticles(articles);
    }
  }, [articles, changeSearch]);
  useEffect(() => {
    if (Array.isArray(articles) && articles.length > 0) {
      changeFilter !== ALL
        ? setFilteredArticles(
            articles.filter((article) => article.type.toUpperCase() === changeFilter),
          )
        : setFilteredArticles(articles);
    }
  }, [articles, changeFilter]);
  return filteredArticles;
}

export default useSearch;
