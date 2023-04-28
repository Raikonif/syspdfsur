import React from "react";
import ClientLayout from "~/layouts/ClientLayout";
import Home from "~/pages/home/Home";

const ClientRoutes = {
  path: "/",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
  ],
};

export default ClientRoutes;
