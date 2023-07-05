import React, { createContext } from "react";
import Diagnosis from "~/interfaces/Diagnosis.type";
import Patient from "~/interfaces/Patient.type";

interface IContextData {
  patients: Patient[];
  diagnoses: Diagnosis[];
}

const DiagnosisContext = createContext<IContextData>({} as IContextData);

export default DiagnosisContext;
