import React from "react";

import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function ClientLayout(): JSX.Element {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <HomeMenu />
      <Outlet />
    </div>
  );
}

export default ClientLayout;
