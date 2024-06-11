import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ALL, PAP, CITHOLOGY, HISTOPATHOLOGY } from "~/constants/Blog/blog.constants";
import Search from "~/pages/blog_client/articles/components/Search";
import Filter from "~/pages/blog_client/articles/components/Filter";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { Case } from "~/interfaces/Case.interface";

function Cases(): ReactElement {
  const [changeFilter, setChangeFilter] = useState<string>(ALL);
  const [changeSearch, setChangeSearch] = useState<string>("");
  const [casesFiltered, setCasesFiltered] = useState<Case[]>({} as Case[]);
  const { cases, handleClickOption } = useContext(ClientContext);


  useEffect(() => {
    if (Array.isArray(cases.data && cases.data.length > 0)) {
      changeSearch !== "" &&
      changeSearch !== undefined &&
      changeSearch !== null &&
      changeSearch !== " " &&
      changeSearch !== ALL &&
      changeSearch !== PAP &&
      changeSearch !== CITHOLOGY &&
      changeSearch !== HISTOPATHOLOGY
        ? setCasesFiltered(
            cases.data.filter((_case) => _case.title.toUpperCase().includes(changeSearch.toUpperCase())),
          )
        : setCasesFiltered(cases.data);
    }
  }, [cases, changeSearch]);

  useEffect(() => {
    if (Array.isArray(cases.data) && cases.data.length > 0) {
      changeFilter !== ALL
        ? setCasesFiltered(cases.data.filter((_case) => _case.type.toUpperCase() === changeFilter))
        : setCasesFiltered(cases.data);
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
      <div className="flex flex-grow">
        {cases.data && cases.data.map((_case) => (
          <div
            className={`${
              _case.type === "Histophatology" ? "border-indigo-700" : "border-cyan-700"
            } m-6 flex w-full flex-grow flex-col rounded-2xl border-b-8 bg-slate-50 dark:bg-slate-500/60 md:w-1/4`}
            key={_case.id}
          >
            <div className="flex-1 overflow-hidden shadow">
              <div className="flex flex-wrap no-underline hover:no-underline">
                <h4
                  className={`${
                    _case.type === "Histophatology"
                      ? "text-indigo-700 dark:text-indigo-200"
                      : "text-cyan-700 dark:text-cyan-200"
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
                  className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none dark:bg-cyan-700 dark:text-white lg:mx-0"
                  onClick={() => handleClickOption("cases/1")}
                >
                  Leer mas ...
                </button>
              </div>
            </div>
          </div>
        ))}
        {
          cases.data && cases.data.length === 0 && (
            <div className="flex items-center justify-center w-full h-64 text-center">
              <h4 className="text-2xl text-violet-200 dark:text-violet-100">No se encontraron casos</h4>
            </div>
          )
        }
        {
          (cases.error || cases.isError) && (
            <div className="flex items-center justify-center w-full h-64 text-center">
              <h4 className="text-2xl text-violet-200 dark:text-violet-100">
                No se pudo cargar los casos
              </h4>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Cases;
