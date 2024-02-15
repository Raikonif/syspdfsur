import React from "react";
import GeneralLayout from "~/layouts/GeneralLayout";
import Patients from "~/pages/patients/Patients";
import Diagnoses from "~/pages/diagnoses/Diagnoses";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import DiagnosisProvider from "~/pages/diagnoses/context/DiagnosisProvider";
import ArticlesPage from "~/pages/articles/ArticlesPage";

const GenericRoutes = {
  path: "adm",
  element: <GeneralLayout />,
  children: [
    {
      path: "",
      element: <ArticlesPage />,
    },
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
