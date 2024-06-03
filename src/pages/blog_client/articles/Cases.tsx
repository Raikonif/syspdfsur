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
  const { cases, handleClickOption } = useContext(ClientContext);

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
      <div className="container mx-auto flex flex-col pt-20">
        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <Filter selected={changeFilter} setSelected={setChangeFilter} />
          <Search search={changeSearch} setSearch={setChangeSearch} />
        </div>
      </div>
      {/*<ArticleList articles={articlesFiltered} />*/}
      <div className="flex flex-grow">
        {cases.map((_case) => (
          <div
            className={`${
              _case.type === "Histophatology" ? "border-indigo-700" : "border-cyan-700"
            } m-6 flex w-full flex-grow flex-col rounded-2xl border-b-8 border-l border-r-8 border-t bg-slate-50 dark:bg-slate-800 md:w-1/4`}
            key={_case.id}
          >
            <div className="flex-1 overflow-hidden shadow">
              <div className="flex flex-wrap no-underline hover:no-underline">
                <h4
                  className={`${
                    _case.type === "Histophatology"
                      ? "text-indigo-700 dark:text-indigo-400"
                      : "text-cyan-700 dark:text-cyan-400"
                  } w-full p-6 text-xs text-gray-600 md:text-sm`}
                >
                  {_case.type === "Histophatology" ? "Histopatológico" : "Citológíco"}
                </h4>
                <h2 className="w-full px-6 text-xl font-bold text-gray-800 dark:text-gray-300">
                  {_case.title}
                </h2>
                <p className="mb-5 px-6 text-base text-gray-800 dark:text-gray-300">
                  {_case.description.slice(0, 150) + (_case.description.length > 150 ? "..." : "")}
                </p>
              </div>
            </div>
            <div className="overflow-hidde mt-auto flex-none p-6 shadow">
              <div className="flex items-center justify-end">
                <button
                  className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none dark:text-white lg:mx-0"
                  onClick={() => handleClickOption("cases/1")}
                >
                  Leer mas ...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cases;
