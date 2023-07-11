import React, { useEffect, useRef, useState } from "react";
import Header from "~/pages/patients/Header";
import ModalCreate from "~/pages/patients/modals/ModalCreate";
import PatientCard from "~/pages/patients/PatientCard";
import { getPatients } from "~/service/patient.service";
import Patient from "~/interfaces/Patient.type";

function Patients(): JSX.Element {
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const modalCreateRef = useRef<HTMLDivElement>(null);
  const [patients, setPatients] = useState<Patient[]>([] as Patient[]);
  const handleModalCreate = (newState: boolean) => {
    setShowModalCreate(newState);
  };
  const getAllPatients = async () => {
    setPatients(await getPatients());
  };

  useEffect(() => {
    getAllPatients();
  }, [showModalCreate]);
  return (
    <>
      <div className="flex w-11/12 flex-col items-center justify-center p-2">
        <Header setModalCreate={handleModalCreate} />
        <ul className="mt-20 grid h-auto w-full grid-cols-2 p-4 px-6">
          {patients.map((patient: Patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </ul>
      </div>
      {showModalCreate && <ModalCreate onClose={handleModalCreate} refModal={modalCreateRef} />}
    </>
  );
}

export default Patients;
