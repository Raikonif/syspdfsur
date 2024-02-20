import React from "react";

function ArticlesList() {
  return (
    <article className="flex max-h-[150px] max-w-[200px] border-2 bg-slate-100 py-2">
      <div className="p-2">
        <header className="px-5 py-2 font-semibold">Article</header>
        <p className="font-semibold text-slate-500">Date 12/12/22</p>
        <p className="font-semibold">Author</p>
        <p>Content ...</p>
      </div>
      <img src="https://picsum.photos/200/980" alt="..." className="h-full w-[100px]" />
    </article>
  );
}

export default ArticlesList;
