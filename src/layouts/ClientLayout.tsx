import React, { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HomeMenu from "~/components/blog_menu/HomeMenu";

function ClientLayout(): ReactElement {
  return (
    <>
      {/*<HomeMenu />*/}
      <div className="w-full items-center justify-center bg-violet-700 pt-28 md:pt-32 lg:pt-20">
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
