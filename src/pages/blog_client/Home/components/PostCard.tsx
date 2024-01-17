import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  link: string;
}

function PostCard({ title, description, date, image, link }: IProps) {
  const navigate = useNavigate();
  const handleClick = (link: string) => {
    navigate(link);
  };

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
        <div className="p-2">
          <p className="italic">{date}</p>
        </div>
        <div className="flex w-full items-end justify-end">
          <button
            onClick={() => handleClick(link)}
            className="m-1 rounded-lg bg-violet-600 p-2 text-white"
          >
            Leer Mas
          </button>
        </div>
      </article>
    </li>
  );
}

export default PostCard;
