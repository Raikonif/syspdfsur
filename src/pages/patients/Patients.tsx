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
  }, [patients]);

  return (
    <>
      <div
        className={`${
          patientsLength < 1 && "h-full"
        } "flex p-2" w-11/12 flex-col items-center justify-center`}
      >
        <Header setModalCreate={handleModalCreate} />
        {patientsLength > 0 && (
          <ul className="mt-20 grid h-auto w-full grid-cols-2 p-4 px-6">
            {patients.map((patient: Patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </ul>
        )}
        {patientsLength < 1 && (
          <div className="flex h-full w-full items-center justify-center">
            <h1 className="text-2xl dark:text-white">No se encontraron pacientes</h1>
          </div>
        )}
      </div>
      {showModalCreate && <ModalCreate onClose={handleModalCreate} refModal={modalCreateRef} />}
    </>
  );
}

export default Patients;
