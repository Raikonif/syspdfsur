import React, { useState } from "react";
import textsConstants from "~/pages/ClientBlogs/Home/constants/texts.constants";
import { NavLink } from "react-router-dom";
import PostsList from "~/components/posts/PostsList";
import PostPreviewCard from "~/components/posts/PostPreviewCard";
import { BiSearchAlt } from "react-icons/all";
import PostFooter from "~/components/posts/PostFooter";
import IPostInterface from "~/interfaces/IPostInterface";
import PostContext from "~/pages/ClientBlogs/Home/context";
import { IMenuArticle } from "~/interfaces/menuInterface";
import ArticlesMenu from "~/components/blog_menu/ArticlesMenu";

function HomeBody(): JSX.Element {
  const [currentPost, setCurrentPost] = useState<IPostInterface>({} as IPostInterface);
  const handleCurrentPost = (updatePost: IPostInterface) => {
    setCurrentPost(updatePost);
  };
  const article_selected_desktop = "bg-slate-100 text-fuchsia-500 border-b-2 border-fuchsia-500";
  const article_selected_mobile = "bg-slate-100 text-fuchsia-500";

  return (
    <div className="flex w-full justify-start">
      <div className="mr-5 flex w-2/3 flex-col">
        <div className="flex">
          <span className="font-semibold text-violet-700">Artículos</span>
          <div className="mx-2 flex w-full items-center justify-end rounded-full bg-slate-100 p-1">
            <label className="flex w-full items-center px-2" id="search">
              <input
                placeholder="Search"
                className="w-full bg-slate-100"
                id="search"
                name="search"
              />
            </label>
            <BiSearchAlt className="mr-2 text-violet-700" />
          </div>
        </div>
        <ArticlesMenu />
        <div className="flex w-full flex-col">
          <PostContext.Provider value={{ setPostSelected: handleCurrentPost }}>
            <PostsList />
          </PostContext.Provider>
          <PostFooter />
        </div>
      </div>
      <div className="flex w-1/3 flex-col">
        <PostPreviewCard
          key={currentPost.key}
          date={currentPost.date}
          image={currentPost.image}
          description={currentPost.description}
          title={currentPost.title}
        />
      </div>
    </div>
  );
}

export default HomeBody;
