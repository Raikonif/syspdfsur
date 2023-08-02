import React, { createContext } from "react";
import Report from "~/interfaces/Report.type";
import Patient from "~/interfaces/Patient.type";

interface IContextData {
  patients: Patient[];
  diagnoses: Report[];
}

const DiagnosisContext = createContext<IContextData>({} as IContextData);

export default DiagnosisContext;
