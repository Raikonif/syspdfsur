import React from "react";
import { Outlet } from "react-router-dom";

function GeneralLayout(): JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-600 ">
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
