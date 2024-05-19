import React, { ReactElement, useContext, useEffect, useState } from "react";
import { Article } from "~/interfaces/Article.interface";
import { ALL, PAP, CITHOLOGY, HISTOPATHOLOGY } from "~/constants/Blog/blog.constants";
import { getArticles } from "~/service/articles.service";
import ArticleList from "~/pages/blog_client/articles/components/ArticleList";
import Search from "~/pages/blog_client/articles/components/Search";
import Filter from "~/pages/blog_client/articles/components/Filter";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { Case } from "~/interfaces/Case.interface";
import { set } from "@internationalized/date/src/manipulation";

function Cases(): ReactElement {
  const [changeFilter, setChangeFilter] = useState<string>(ALL);
  const [changeSearch, setChangeSearch] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [articlesFiltered, setArticlesFiltered] = useState<Article[]>(articles);
  const [casesFiltered, setCasesFiltered] = useState<Case[]>({} as Case[]);
  const allArticles = async () => {
    const articles = await getArticles();
    setArticles(articles.data);
  };
  const { cases } = useContext(ClientContext);

  useEffect(() => {
    allArticles().catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (Array.isArray(cases) && cases.length > 0) {
      changeSearch !== "" &&
      changeSearch !== undefined &&
      changeSearch !== null &&
      changeSearch !== " " &&
      changeSearch !== ALL &&
      changeSearch !== PAP &&
      changeSearch !== CITHOLOGY &&
      changeSearch !== HISTOPATHOLOGY
        ? setCasesFiltered(
            cases.filter((_case) => _case.title.toUpperCase().includes(changeSearch.toUpperCase())),
          )
        : setCasesFiltered(cases);
    }
  }, [cases, changeSearch]);

  useEffect(() => {
    if (Array.isArray(cases) && cases.length > 0) {
      changeFilter !== ALL
        ? setCasesFiltered(cases.filter((_case) => _case.type.toUpperCase() === changeFilter))
        : setCasesFiltered(cases);
    }
  }, [cases, changeFilter]);

  return (
    <div className="flex w-full flex-col">
      <div className="container mx-auto flex flex-col">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <Filter selected={changeFilter} setSelected={setChangeFilter} />
          <Search search={changeSearch} setSearch={setChangeSearch} />
        </div>
      </div>
      {/*<ArticleList articles={articlesFiltered} />*/}
      {cases.map((_case) => (
        <div key={_case.id}>{_case.title}</div>
      ))}
    </div>
  );
}

export default Cases;
