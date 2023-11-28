import { ReactElement } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { VITE_BASE_URL_MOCK } from "~/service/service.constants";
interface PostArticleCardProps {
  title: string;
  content: string;
  date: string;
  image: string;
  link: string;
}

function PostArticleCard({
  title,
  content,
  link,
  image,
  date,
}: PostArticleCardProps): ReactElement {
  const navigate = useNavigate();
  const handleClick = (link: string) => {
    navigate(`${VITE_BASE_URL_MOCK}${link}`);
  };
  return (
    <>
      <article className="flex w-full flex-col rounded-lg shadow-2xl">
        <header className="p-2">
          <h2 className="font-bold">{title}</h2>
        </header>
        <div className="relative flex h-auto w-auto">
          <img src={image} alt={title} className="m-4 h-[200px] w-[300px] rounded-lg p-2" />
          <div className="m-4 flex flex-col">
            <p>{content}</p>
            <footer>{date}</footer>
            <div className="absolute bottom-2 right-2">
              <button
                className="m-5 h-auto w-auto rounded-sm bg-violet-600 p-3 text-white"
                onClick={() => handleClick(link)}
              >
                Leer mas ...
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default PostArticleCard;
