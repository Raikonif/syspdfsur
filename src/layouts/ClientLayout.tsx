import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "~/pages/blog_client/sections/Header";

function ClientLayout(): ReactElement {
  return (
    <>
      <div className="w-full items-center justify-center bg-gradient-to-b from-violet-700 from-70% to-white dark:from-cyan-700 dark:to-violet-950">
        <div className="min-h-screen">
          {/*<Header />*/}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
