import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function ClientLayout(): ReactElement {
  return (
    <div className="w-full items-center justify-center p-1 pt-32 sm:pt-20">
      <HomeMenu />
      <Outlet />
    </div>
  );
}

export default ClientLayout;
