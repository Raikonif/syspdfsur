import React, { ReactElement } from "react";
import PostCard from "~/pages/blog_client/articles/components/PostCard";
import textsConstants from "~/pages/blog_client/home/constants/texts.constants";
import { IPostListInterface } from "~/interfaces/IPostInterface";
import { useNavigate } from "react-router-dom";

function HomeBodyAlt(): ReactElement {
  const defaultPost: IPostListInterface =
    textsConstants.body.postsList[0] || ({} as IPostListInterface);
  const recentPosts: IPostListInterface[] = textsConstants.body.postsList.slice(1, 5) || [];
  const navigate = useNavigate();
  const handleClick = (link: string) => {
    navigate(link);
  };
  return (
    <section id="recent-articles" className="flex w-auto flex-col">
      <h1 className="pb-3 pl-4 font-bold">Publicaciones Recientes</h1>
      <div className="flex justify-center">
        <PostCard
          link={defaultPost.link}
          title={defaultPost.title}
          description={defaultPost.description}
          date={defaultPost.date}
          image={defaultPost.image}
        />
        <ul className="grid grid-cols-3">
          {recentPosts.map((item: IPostListInterface) => (
            <PostCard
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              image={"https://picsum.photos/200/100"}
              link={item.link}
            />
          ))}
          <div className="flex w-full items-center justify-center">
            <button
              onClick={() => handleClick("/components")}
              className="h-max w-max font-bold text-violet-500 hover:text-violet-400 hover:shadow-2xl active:text-violet-700"
            >
              Mas articulos ...
            </button>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default HomeBodyAlt;
