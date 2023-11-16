import React from "react";
import textsConstants from "~/pages/blog_client/Home/constants/texts.constants";
import { IPostListInterface } from "~/interfaces/IPostInterface";
import PostArticleCard from "~/pages/blog_client/Home/components/PostArticleCard";
function Articles() {
  return (
    <div className="flex h-full w-auto flex-col pt-20">
      <ul className="relative flex flex-col">
        {textsConstants.body.postsList.map((item: IPostListInterface) => (
          <li key={item.id} className="m-2 w-full">
            <PostArticleCard
              link={item.link}
              title={item.title}
              content={item.description}
              date={item.date}
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
