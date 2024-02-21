import React, { ReactElement } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoReaderSharp } from "react-icons/io5";
import { Article } from "~/interfaces/Article.interface";

interface ArticleCardSysProps {
  article: Article;
  setModalEdit: (newState: boolean) => void;
  setModalShow: (newState: boolean) => void;
  setModalDelete: (newState: boolean) => void;
}

function ArticleCardSys({
  article,
  setModalShow,
  setModalEdit,
  setModalDelete,
}: ArticleCardSysProps): ReactElement {
  return (
    <article className="m-2 flex max-h-[200px] max-w-md flex-col rounded-md border-y border-l-8 border-fuchsia-600 shadow-md">
      <div className="flex w-full justify-between">
        <div className="flex h-full w-full flex-col p-4">
          <header className="mb-2 mt-1 border-b border-fuchsia-600 pb-1 font-semibold">
            Case 1 PAP new
          </header>
          <p className="text-sm font-semibold text-slate-500">Date: 12/12/22</p>
          <p className="font-semibold">Dra. Nandy Calle Peñaranda</p>
        </div>
        <div className="flex h-full  flex-col justify-end">
          <button
            className="h-full w-full rounded-r-md bg-green-400 px-1 text-white"
            onClick={() => setModalShow(true)}
          >
            <IoReaderSharp className="text-center" size={20} />
          </button>
          <button
            className="h-full w-full rounded-r-md bg-blue-600 px-1 text-white"
            onClick={() => setModalEdit(true)}
          >
            <FaEdit size={20} />
          </button>
          <button
            className="h-full w-full rounded-r-md bg-red-600 px-1 text-white"
            onClick={() => setModalDelete(true)}
          >
            <MdDeleteForever size={20} />
          </button>
        </div>
      </div>
      {/*<img*/}
      {/*  src="https://picsum.photos/200/980"*/}
      {/*  alt="..."*/}
      {/*  className="max-h-[200px] w-[150px] rounded-r-md"*/}
      {/*/>*/}
    </article>
  );
}

export default ArticleCardSys;
