import React, { ReactElement } from "react";

function ArticleCardSys(): ReactElement {
  return (
    <article className="m-2 flex max-h-[170px] max-w-[500px] rounded-md shadow-2xl">
      <div className="flex flex-col px-5 py-3 shadow-inner">
        <span className="text-fuchsia-600........ text-end text-xs">id39dj</span>
        <header className="mb-2 mt-1 border-b border-fuchsia-600 pb-1 font-semibold">
          Article: Case 1 PAP new
        </header>
        <p className="text-sm font-semibold text-slate-500">Date: 12/12/22</p>
        <p className="font-semibold">Author: Dra. Nandy Calle Peñaranda</p>
        <p>Type: PAP</p>
      </div>
      <img
        src="https://picsum.photos/200/980"
        alt="..."
        className="h-[170px] w-[150px] rounded-r-md"
      />
    </article>
  );
}

export default ArticleCardSys;
