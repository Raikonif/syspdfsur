import React from "react";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
}

function PostCard({ title, description, date, image }: IProps) {
  return (
    <li className="m-3">
      <article className="w-auto rounded-lg border p-3 shadow-2xl">
        <header className="flex flex-col border-b-2 p-2">
          <img src={image} alt="post_card" />
          <h2 className="font-bold">{title}</h2>
        </header>
        <div className="border-b-2 p-2">
          <p>{description}</p>
        </div>
        <div className="">
          <p className="italic">{date}</p>
        </div>
        <div className="flex w-full items-end justify-end">
          <button className="m-1 rounded-lg bg-violet-600 p-2 text-white">Leer Mas</button>
        </div>
      </article>
    </li>
  );
}

export default PostCard;
