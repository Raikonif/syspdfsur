import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout(): JSX.Element {
  return (
    <div className="h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
