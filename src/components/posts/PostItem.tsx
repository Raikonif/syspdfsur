import React from "react";

interface IProps {
  key: number;
  title: string;
  description: string;
  image: string;
  date: string;
}
function PostItem({ title, description, image, date, key }: IProps) {
  return (
    <li className="m-1 flex flex-col rounded-lg border bg-slate-50 p-1 shadow-xl" key={key}>
      <button className="flex flex-col">
        <span>{title}</span>
        <span>{description}</span>
        <span>{date}</span>
      </button>
    </li>
  );
}

export default PostItem;
