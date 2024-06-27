import React from "react";
import textsConstants from "~/pages/blog_client/home/constants/texts.constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PostFooter() {
  const slicePages = () => {
    let pages = 0;
    if (textsConstants.body.postsList.length > 5) {
      pages = textsConstants.body.postsList.length / 5;
      console.log(pages);
    }
    return textsConstants.body.postsList;
  };
  return (
    <div className="flex w-full">
      <button className="ml-2 flex items-center">
        <IoIosArrowBack className="text-violet-700 active:text-violet-400" />
        <span className="text-fuchsia-500 active:text-fuchsia-300">prev</span>
      </button>
      <span className="px-3 text-slate-500">1</span>
      <span className="px-3 text-fuchsia-500">2</span>
      <span className="px-3 text-slate-500">3</span>
      <span className="px-3 text-slate-500">...</span>
      <span className="px-3 text-slate-500">5</span>
      <button className="flex items-center">
        <span className="text-fuchsia-500 active:text-fuchsia-300">next</span>
        <IoIosArrowForward className="text-violet-700 active:text-violet-400" />
      </button>
    </div>
  );
}

export default PostFooter;
