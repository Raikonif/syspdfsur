import React from "react";
import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/Login";

const AuthRoutes2 = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "",
      element: <Login />,
    },
  ],
};

export default AuthRoutes2;
