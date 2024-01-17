import React, { ReactElement, useEffect, useState } from "react";
import textsConstants from "~/pages/blog_client/Home/constants/texts.constants";
import { IPostListInterface } from "~/interfaces/IPostInterface";
import PostArticleCard from "~/pages/blog_client/Home/components/PostArticleCard";
import { Article } from "~/interfaces/Article.interface";

const ALL = "ALL";
const PAP = "PAPS";
const CITHOLOGY = "CITHOLOGY";
const HISTOPATHOLOGY = "HISTOPATHOLOGY";
function Articles(): ReactElement {
  const [changeFilter, setChangeFilter] = useState<string>(ALL);
  const [changeSearch, setChangeSearch] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  const [articlesFiltered, setArticlesFiltered] = useState<Article[]>(articles);
  const allArticles = async () => {
    // const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    allArticles();
  }, []);
  return (
    <div className="flex h-full w-full flex-col pt-20">
      <ul className="relative w-auto flex-col">
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
