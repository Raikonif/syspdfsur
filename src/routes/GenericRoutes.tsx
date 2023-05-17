import React from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Dashboard from "~/pages/Dashboard";
import Patients from "~/pages/patients/Patients";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import { AuthProvider } from "~/pages/login/context/AuthContext";

const GenericRoutes = {
  path: "",
  element: (
    <AuthProvider>
      <GeneralLayout />
    </AuthProvider>
  ),
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "patients",
      element: (
        <AuthProvider>
          <Patients />
        </AuthProvider>
      ),
    },
    {
      path: "patients_history",
      element: <PatientsHistory />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
  ],
};

export default GenericRoutes;
