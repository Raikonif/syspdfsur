import React, { lazy, Suspense } from "react";
import ClientLayout from "~/layouts/ClientLayout";
import NotFound from "~/pages/NotFound";
import Cases from "~/pages/blog_client/articles/Cases";
import About from "~/pages/blog_client/About";
import Blog from "~/pages/blog_client/Blog";
import Landing from "~/pages/blog_client/Landing";
import ClientProvider from "~/pages/blog_client/context";
const CasesRoutes = lazy(() => import("~/routes/CasesRoutes"));
// import CasesRoutes from "~/routes/CasesRoutes";
import ProgressCircle from "~/components/ProgressCircle";
import Landing2 from "~/pages/blog_client/Landing2";

const ClientRoutes = {
  path: "",
  element: (
    <ClientProvider>
      <ClientLayout />
    </ClientProvider>
  ),
  children: [
    {
      path: "",
      element: <Landing2 />,
    },
    {
      path: "cases",
      element: <Cases />,
    },
    {
      path: "cases/*",
      element: (
        <Suspense fallback={<ProgressCircle text={"Cargando Casos ..."} color={"secondary"} />}>
          <CasesRoutes />
        </Suspense>
      ),
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
