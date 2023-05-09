import React from "react";
import ClientLayout from "~/layouts/ClientLayout";
import Home from "~/pages/home/Home";
import NotFound from "~/pages/NotFound";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default ClientRoutes;
