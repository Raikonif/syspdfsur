import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function ClientLayout(): ReactElement {
  return (
    <>
      <div className="min-h-screen">
        <HomeMenu />
        <div className="w-full items-center justify-center pt-32 sm:pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
