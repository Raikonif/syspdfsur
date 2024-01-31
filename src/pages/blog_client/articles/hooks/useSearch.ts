import { useState } from "react";
import { ALL, CITHOLOGY, HISTOPATHOLOGY, PAP } from "~/constants/Blog/blog.constants";
import { Article } from "~/interfaces/Article.interface";

function useSearch({
  articles,
  changeSearch,
}: {
  articles: Article[];
  changeSearch: string;
  changeFilter: string;
}): Article[] {
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([] as Article[]);
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
  return filteredArticles;
}

export default useSearch;
