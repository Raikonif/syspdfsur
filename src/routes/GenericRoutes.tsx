import React, { lazy, Suspense } from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Settings from "~/pages/Settings";
import AdminProvider from "~/pages/admin/context";
import ProtectedRoutes from "~/routes/ProtectedRoutes";
import ProgressCircle from "~/components/ProgressCircle";
const Login = lazy(() => import("~/pages/admin/authentication/Login"));
const AdminPanel = lazy(() => import("~/pages/admin/AdminPanel"));
const CasesTable = lazy(() => import("~/pages/admin/cases/CasesTable"));

const GenericRoutes = {
  path: "adm",
  element: (
    <Suspense fallback={<ProgressCircle text="Cargando ..." color="warning" />}>
      <AdminProvider>
        <GeneralLayout />
      </AdminProvider>
    </Suspense>
  ),
  children: [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "",
      element: (
        <ProtectedRoutes>
          <AdminPanel />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "cases",
          element: <CasesTable />,
        },
        {
          path: "articles",
          element: <CasesTable />,
        },
        {
          path: "patients",
          element: <CasesTable />,
        },
        {
          path: "diagnoses",
          element: <CasesTable />,
        },
        {
          path: "patients_history",
          element: <CasesTable />,
        },
      ],
    },

    {
      path: "settings",
      element: <Settings />,
    },
  ],
};

export default GenericRoutes;
