import React from "react";

function Articles() {
  return (
    <section className="border-b bg-white py-8 dark:bg-gray-700">
      <div className="container mx-auto flex flex-wrap pb-12 pt-4">
        <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800 dark:text-white">
          Artículos
        </h2>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>
        <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full p-6 text-xs text-gray-600 md:text-sm">PAP</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Papanicolau</div>
              <p className="mb-5 px-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
            <div className="flex items-center justify-start">
              <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none dark:text-white lg:mx-0">
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full p-6 text-xs text-gray-600 md:text-sm">Histopatología</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">Muestra de Biopsia</div>
              <p className="mb-5 px-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
            <div className="flex items-center justify-center">
              <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
          <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full p-6 text-xs text-gray-600 md:text-sm">Citología</p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                Muestra de Citología
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
            <div className="flex items-center justify-end">
              <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full bg-violet-600 px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
