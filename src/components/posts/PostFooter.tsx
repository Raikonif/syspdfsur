import React from "react";
import textsConstants from "~/pages/ClientBlogs/Home/constants/texts.constants";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/all";

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
      <button className="flex items-center">
        <IoIosArrowBack className="text-violet-700" />
        <span className="text-fuchsia-500">prev</span>
      </button>
      <span className="px-3 text-slate-500">1</span>
      <span className="px-3 text-slate-500">2</span>
      <span className="px-3 text-slate-500">3</span>
      <span className="px-3 text-slate-500">...</span>
      <span className="px-3 text-slate-500">5</span>
      <button className="flex items-center">
        <span className="text-fuchsia-500">next</span>
        <IoIosArrowForward className="text-violet-700" />
      </button>
    </div>
  );
}

export default PostFooter;
