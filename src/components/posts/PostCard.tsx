import React from "react";

interface IProps {
  key: number;
  title: string;
  description: string;
  image: string;
  date: string;
}
function PostCard({ title, description, image, date, key }: IProps) {
  return (
    <li
      className="m-1 flex w-full flex-col rounded-lg border bg-slate-50 p-1 shadow-xl hover:bg-violet-50 active:bg-violet-200"
      key={key}
    >
      <button className="flex flex-col">
        <span className="text-violet-500">{title}</span>
        <span className="text-slate-600">{description}</span>
        <span className="text-slate-500">{date}</span>
      </button>
    </li>
  );
}

export default PostCard;
