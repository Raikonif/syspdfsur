import React from "react";
import ClientLayout from "~/layouts/ClientLayout";
import Home from "~/pages/blog_client/home/Home";
import NotFound from "~/pages/NotFound";
import Articles from "~/pages/blog_client/articles/Articles";
import About from "~/pages/blog_client/About";
import Blog from "~/pages/blog_client/Blog";
import Landing from "~/pages/blog_client/home/Landing";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Landing />,
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
