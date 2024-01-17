import React, { useState, useEffect } from "react";
import Patient from "~/interfaces/Patient.type";
import DiagnosisContext from "./DiagnosisContext";
import { Report } from "~/interfaces/Report.type";
import { getReports } from "~/service/report.service";
import { getPatients } from "~/service/patient.service";

interface IProps {
  children: React.ReactNode;
}
function DiagnosisProvider({ children }: IProps) {
  const [diagnoses, setDiagnoses] = useState<Report[]>([] as Report[]);
  const [patients, setPatients] = useState<Patient[]>([] as Patient[]);

  const getAllPatients = async () => {
    setPatients(await getPatients());
  };
  const getAllDiagnoses = async () => {
    setDiagnoses(await getReports());
  };
  useEffect(() => {
    getAllDiagnoses();
    getAllPatients();
  }, []);
  return (
    <DiagnosisContext.Provider value={{ patients, diagnoses }}>
      {children}
    </DiagnosisContext.Provider>
  );
}

export default DiagnosisProvider;
