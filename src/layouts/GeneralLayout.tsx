import React from "react";
import { Outlet } from "react-router-dom";

function GeneralLayout(): JSX.Element {
  return (
    <div className="bg-blue-600 h-screen flex justify-center items-center ">
      <Outlet />
    </div>
  );
}

export default GeneralLayout;
