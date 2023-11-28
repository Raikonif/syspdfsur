import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function ClientLayout(): ReactElement {
  return (
    <div className="flex h-screen w-auto flex-col items-center justify-center">
      <HomeMenu />
      <Outlet />
    </div>
  );
}

export default ClientLayout;
