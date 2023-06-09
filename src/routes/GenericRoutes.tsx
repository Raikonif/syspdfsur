import React from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Dashboard from "~/pages/Dashboard";
import Patients from "~/pages/patients/Patients";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import NotFound from "~/pages/NotFound";

const GenericRoutes = {
  path: "",
  element: <GeneralLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/patients",
      element: <Patients />,
    },
    {
      path: "/patients_history",
      element: <PatientsHistory />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default GenericRoutes;
