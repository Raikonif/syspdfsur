import React from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Patients from "~/pages/patients/Patients";
import Diagnoses from "~/pages/diagnoses/Diagnoses";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import { AuthProvider } from "~/pages/login/context/AuthContext";
import UserContextProvider from "~/pages/login/context/UserContext";
import DiagnosisProvider from "~/pages/diagnoses/context/DiagnosisProvider";

const GenericRoutes = {
  path: "",
  element: <GeneralLayout />,
  children: [
    {
      path: "patients",
      element: <Patients />,
    },
    {
      path: "diagnoses",
      element: (
        <DiagnosisProvider>
          <Diagnoses />
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
