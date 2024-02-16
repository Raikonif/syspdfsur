import React, { useEffect, useRef, useState } from "react";
import Header from "~/pages/patients/Header";
import ModalCreate from "~/pages/patients/modals/ModalCreate";
import PatientCard from "~/pages/patients/components/PatientCard";
import { getPatients } from "~/service/patient.service";
import Patient from "~/interfaces/Patient.type";
import PatientList from "~/pages/patients/components/PatientList";

function Patients(): JSX.Element {
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const modalCreateRef = useRef<HTMLDivElement>(null);
  const [patients, setPatients] = useState<Patient[]>([] as Patient[]);
  const [patientsLength, setPatientsLength] = useState<number>(0);
  const handleModalCreate = (newState: boolean) => {
    setShowModalCreate(newState);
  };
  const getAllPatients = async () => {
    setPatients(await getPatients());
  };

  useEffect(() => {
    getAllPatients();
  }, [showModalCreate]);

  useEffect(() => {
    if (patients.length > 0) setPatientsLength(patients.length);
  }, []);

  return (
    <>
      <div
        className={`${
          patientsLength < 1 && "h-full"
        } "flex p-2" w-11/12 flex-col items-center justify-center`}
      >
        <Header setModalCreate={handleModalCreate} />
        <PatientList patients={patients} />
      </div>
      {showModalCreate && <ModalCreate onClose={handleModalCreate} refModal={modalCreateRef} />}
    </>
  );
}

export default Patients;
