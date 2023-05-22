import React from "react";
import ClientLayout from "~/layouts/ClientLayout";
import Home from "~/pages/ClientBlogs/Home/Home";
import NotFound from "~/pages/NotFound";
import Blogs from "~/pages/ClientBlogs/Blogs";
import About from "~/pages/ClientBlogs/About";
import Resources from "~/pages/ClientBlogs/Resources";

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
