import React from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Patients from "~/pages/patients/Patients";
import Diagnoses from "~/pages/diagnoses/Diagnoses";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import DiagnosisProvider from "~/pages/diagnoses/context/DiagnosisProvider";
import ArticlesPage from "~/pages/articles/ArticlesPage";
import ArticlesProvider from "~/pages/articles/context";
import CasesTable from "~/pages/admin/cases/CasesTable";
import Login from "~/pages/login/Login";
import AdminPanel from "~/pages/admin/AdminPanel";
import AdminProvider from "~/pages/admin/context";

const GenericRoutes = {
  path: "adm",
  element: (
    <AdminProvider>
      <GeneralLayout />
    </AdminProvider>
  ),
  children: [
    {
      path: "",
      element: <Login />,
    },
    {
      path: "",
      element: <AdminPanel />,
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
