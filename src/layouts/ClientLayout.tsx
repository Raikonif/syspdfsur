import React, { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";
import { Article } from "~/interfaces/Article.interface";

function ClientLayout(): ReactElement {
  const [articles, setArticles] = useState<Article[]>([] as Article[]);
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);
  return (
    <>
      <div className=" min-h-screen dark:bg-slate-700">
        <HomeMenu />
        <div className="w-full items-center justify-center px-3 pt-28 sm:px-5 md:pt-32 lg:pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
