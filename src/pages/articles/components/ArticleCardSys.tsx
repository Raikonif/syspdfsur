import React, { ReactElement } from "react";

function ArticleCardSys(): ReactElement {
  return (
    <article className="m-2 flex max-h-[200px] max-w-[400px] rounded-md shadow-2xl">
      <div className="flex items-center justify-center">
        <div className="flex h-full flex-col border-y border-l p-4">
          <span className="text-end text-xs text-fuchsia-600">Type: PAP</span>
          <header className="mb-2 mt-1 border-b border-fuchsia-600 pb-1 font-semibold">
            Article: Case 1 PAP new
          </header>
          <p className="text-sm font-semibold text-slate-500">Date: 12/12/22</p>
          <p className="font-semibold">Dra. Nandy Calle Peñaranda</p>
        </div>
      </div>
      <img
        src="https://picsum.photos/200/980"
        alt="..."
        className="max-h-[200px] w-[150px] rounded-r-md"
      />
    </article>
  );
}

export default ArticleCardSys;
