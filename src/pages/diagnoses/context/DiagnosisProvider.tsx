import React, { useState, useEffect } from "react";
import Patient from "~/interfaces/Patient.type";
import DiagnosisContext from "./DiagnosisContext";
import Diagnosis from "~/interfaces/Diagnosis.type";
import { getDiagnoses } from "~/service/diagnosis.service";
import { getPatients } from "~/service/patient.service";

interface IProps {
  children: React.ReactNode;
}
function DiagnosisProvider({ children }: IProps) {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([] as Diagnosis[]);
  const [patients, setPatients] = useState<Patient[]>([] as Patient[]);

  const getAllPatients = async () => {
    setPatients(await getPatients());
  };
  const getAllDiagnoses = async () => {
    setDiagnoses(await getDiagnoses());
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