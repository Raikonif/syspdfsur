import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/all";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { CASES } from "~/constants";

function Cases() {
  const { handleClickOption, cases } = useContext(ClientContext);
  return (
    <section
      className="bg-gradient-to-b from-violet-200 to-violet-700 py-8 dark:from-violet-900 dark:to-cyan-700"
      id="cases"
    >
      <div className="container mx-auto flex flex-wrap pb-12 pt-4">
        <h2
          className="my-2 w-full px-3 text-center text-5xl font-bold leading-tight text-violet-900 dark:text-violet-100">
          Casos de Estudio
        </h2>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>
        <div className="flex flex-grow">
          {cases.isLoading && (
            <div className="flex items-center justify-center w-full h-64 text-center">
              <h4 className="text-2xl text-violet-200 dark:text-violet-100">Cargando ...</h4>
            </div>
          )}
          {
            cases.error && (
              <div className="flex items-center justify-center w-full h-64 text-center">
                <h4 className="text-2xl text-violet-200 dark:text-violet-100">
                  No se pudo cargar los casos
                </h4>
              </div>
            )
          }
          {cases.data && cases.data.slice(0, 3).map((_case) => (
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
                    {_case.description.slice(0, 150) +
                      (_case.description.length > 150 ? "..." : "")}
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
        </div>
      </div>
      <div
        className="flex cursor-pointer justify-center  md:mr-28 md:justify-end"
        onClick={() => handleClickOption(CASES)}
      >
        <h4 className="text-2xl text-violet-200 hover:underline hover:underline-offset-2 dark:text-violet-100">
          Ver Mas Casos ...
        </h4>
        <FaArrowRight className="ml-2 h-8 w-8 text-violet-700 hover:animate-bounce dark:text-white" />
      </div>
    </section>
  );
}

export default Cases;
