import React, { ReactElement, useEffect } from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function ClientLayout(): ReactElement {
  return (
    useEffect(() => {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }, []),
    (
      <>
        <div className=" min-h-screen dark:bg-slate-800">
          <HomeMenu />
          <div className="w-full items-center justify-center pt-28 md:pt-32 lg:pt-20">
            <Outlet />
          </div>
        </div>
      </>
    )
  );
}

export default ClientLayout;
