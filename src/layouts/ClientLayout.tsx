import React, { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "~/pages/blog_client/sections/Header";

function ClientLayout(): ReactElement {
  return (
    <>
      <div className="w-full items-center justify-center">
        <div className="min-h-screen">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ClientLayout;
