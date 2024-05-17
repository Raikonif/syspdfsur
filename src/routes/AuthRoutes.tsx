import React from "react";
import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/login/Login";

const AuthRoutes = {
  path: "adm",
  element: <AuthLayout />,
  children: [
    {
      path: "auth",
      element: <Login />,
    },
  ],
};

export default AuthRoutes;
