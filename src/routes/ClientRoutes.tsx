import React from "react";
import ClientLayout from "~/layouts/ClientLayout";
import Home from "~/pages/blog_client/Home/Home";
import NotFound from "~/pages/NotFound";
import Articles from "~/pages/blog_client/Articles";
import About from "~/pages/blog_client/About";
import Resources from "~/pages/blog_client/Blog";
import Blog from "~/pages/blog_client/Blog";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "articles",
      element: <Articles />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default ClientRoutes;
