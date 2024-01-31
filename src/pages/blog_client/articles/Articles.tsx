import React, { ReactElement, useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import { ALL, PAP, CITHOLOGY, HISTOPATHOLOGY } from "~/constants/Blog/blog.constants";
import { getArticles } from "~/service/articles.service";
import ArticleList from "~/pages/blog_client/articles/components/ArticleList";
import Search from "~/pages/blog_client/articles/components/Search";
import Filter from "~/pages/blog_client/articles/components/Filter";

function Articles(): ReactElement {
  const [changeFilter, setChangeFilter] = useState<string>(ALL);
  const [changeSearch, setChangeSearch] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [articlesFiltered, setArticlesFiltered] = useState<Article[]>(articles);
  const allArticles = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    allArticles();
  }, []);

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
        ? setArticlesFiltered(
            articles.filter((article) =>
              article.title.toUpperCase().includes(changeSearch.toUpperCase()),
            ),
          )
        : setArticlesFiltered(articles);
    }
  }, [articles, changeSearch]);

  useEffect(() => {
    if (Array.isArray(articles) && articles.length > 0) {
      changeFilter !== ALL
        ? setArticlesFiltered(
            articles.filter((article) => article.type.toUpperCase() === changeFilter),
          )
        : setArticlesFiltered(articles);
    }
  }, [articles, changeFilter]);

  return (
    <div className="flex w-full flex-col">
      <div className="container mx-auto flex flex-col">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <Filter selected={changeFilter} setSelected={setChangeFilter} />
          <Search search={changeSearch} setSearch={setChangeSearch} />
        </div>
      </div>
      <ArticleList articles={articlesFiltered} />
    </div>
  );
}

export default Articles;