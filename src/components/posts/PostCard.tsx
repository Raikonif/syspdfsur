import React, { useContext, useState } from "react";
import IPostInterface from "~/interfaces/IPostInterface";
import PostContext from "~/pages/blog_client/Home/context";
import { IPostContext } from "~/pages/blog_client/Home/context";
function PostCard({ title, description, image, date, key }: IPostInterface) {
  const { setPostSelected } = useContext(PostContext) as IPostContext;
  const handleClick = () => {
    setPostSelected({ title, description, image, date, key });
  };
  return (
    <li
      className="m-1 flex w-full flex-col rounded-lg bg-slate-50 p-1 shadow-xl hover:bg-violet-50 active:bg-violet-200"
      key={key}
    >
      <button className="flex flex-col" onClick={handleClick}>
        <span className="text-violet-500">{title}</span>
        <span className="text-slate-600">{description}</span>
        <span className="text-slate-500">{date}</span>
      </button>
    </li>
  );
}

export default PostCard;
