import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/all";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { CASES } from "~/constants";

function Cases() {
  const { handleClickOption } = useContext(ClientContext);
  return (
    <section
      className="bg-white bg-gradient-to-b from-violet-700 to-white py-8 dark:to-black"
      id="cases"
    >
      <div className="container mx-auto flex flex-wrap pb-12 pt-4">
        <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-white">
          Casos de Estúdio
        </h2>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>
        <div className="m-6 flex w-full flex-grow flex-col rounded-2xl bg-white md:w-1/4">
          <div className="flex-1 overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full p-6 text-xs text-gray-600 md:text-sm">PAP</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Papanicolau</div>
              <p className="mb-5 px-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="overflow-hidde mt-auto flex-none p-6 shadow">
            <div className="flex items-center justify-start">
              <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none dark:text-white lg:mx-0">
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
        <div className="m-6 flex w-full flex-grow flex-col rounded-2xl bg-white md:w-1/4">
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full p-6 text-xs text-gray-600 md:text-sm">PAP</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Papanicolau</div>
              <p className="mb-5 px-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="overflow-hidde mt-auto flex-none p-6 shadow">
            <div className="flex items-center justify-start">
              <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none dark:text-white lg:mx-0">
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
        <div className="m-6 flex w-full flex-grow flex-col rounded-2xl bg-white md:w-1/4">
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full p-6 text-xs text-gray-600 md:text-sm">PAP</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Papanicolau</div>
              <p className="mb-5 px-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="overflow-hidde mt-auto flex-none p-6 shadow">
            <div className="flex items-center justify-start">
              <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none dark:text-white lg:mx-0">
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex cursor-pointer justify-center  md:mr-28 md:justify-end"
        onClick={() => handleClickOption(CASES)}
      >
        <h4 className="text-2xl text-violet-700 hover:underline hover:underline-offset-2 dark:text-white">
          Ver Mas Artículos ...
        </h4>
        <FaArrowRight className="ml-2 h-8 w-8 text-violet-700 hover:animate-bounce dark:text-white" />
      </div>
    </section>
  );
}

export default Cases;
