import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Footer from "~/pages/blog_client/sections/Footer";

function ClientLayout(): ReactElement {
  return (
    <>
      <div className="w-full items-center justify-center dark:from-cyan-700 dark:to-violet-950">
        <div className="min-h-screen">
          {/*<Header />*/}
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
