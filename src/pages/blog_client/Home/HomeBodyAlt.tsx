import React, { ReactElement } from "react";
import PostCard from "~/pages/blog_client/Home/components/PostCard";
import textsConstants from "~/pages/blog_client/Home/constants/texts.constants";

function HomeBodyAlt(): ReactElement {
  return (
    <section id="recent-articles" className="flex w-auto flex-col">
      <h1 className="pb-3 pl-4 font-bold">Publicaciones Recientes</h1>
      <div className="flex justify-center">
        <article className="m-3 h-auto w-auto rounded-lg border p-3 shadow-2xl">
          <header className="flex flex-col border-b-2 p-2">
            <img src="https://picsum.photos/200/100" alt="last_post" />
            <h2 className="font-bold">Titulo de articulo reciente</h2>
          </header>
          <div className="border-b-2 p-2">
            <p>Descripcion del articulo mas reciente</p>
          </div>
          <div className="">
            <p className="italic">15/12/2023</p>
          </div>
          <div className="flex justify-end">
            <button className="m-1 rounded-lg bg-violet-600 p-2 text-white">Leer Mas</button>
          </div>
        </article>
        <ul className="grid grid-cols-3">
          {textsConstants.body.postsList.map((item: any) => (
            <PostCard
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              image={"https://picsum.photos/200/100"}
            />
          ))}
          <div className="flex w-full items-center justify-center">
            <button className="h-max w-max text-violet-500 hover:text-violet-400 hover:shadow-2xl active:text-violet-700">
              Mas articulos ...
            </button>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default HomeBodyAlt;
