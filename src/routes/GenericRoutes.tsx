import React from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Dashboard from "~/pages/Dashboard";
import Patients from "~/pages/patients/Patients";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import { AuthProvider } from "~/pages/login/context/AuthContext";
import UserContextProvider from "~/pages/login/context/UserContext";
import DiagnosisProvider from "~/pages/patients/context/DiagnosisProvider";

const GenericRoutes = {
  path: "",
  element: <GeneralLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "patients",
      element: (
        <DiagnosisProvider>
          <Patients />
        </DiagnosisProvider>
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
