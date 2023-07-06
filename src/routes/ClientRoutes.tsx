import React from "react";
import ClientLayout from "~/layouts/ClientLayout";
import Home from "~/pages/blog_client/Home/Home";
import NotFound from "~/pages/NotFound";
import Blogs from "~/pages/blog_client/Blogs";
import About from "~/pages/blog_client/About";
import Resources from "~/pages/blog_client/Resources";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "blogs",
      element: <Blogs />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "resources",
      element: <Resources />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default ClientRoutes;
