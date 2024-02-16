import Patient from "~/interfaces/Patient.type";
import PatientCard from "~/pages/patients/components/PatientCard";
import React, { useEffect, useState } from "react";

interface PatientListProps {
  patients: Patient[];
}
function PatientList({ patients }: PatientListProps) {
  const [patientsLength, setPatientsLength] = useState<number>(0);
  useEffect(() => {
    if (patients.length > 0) setPatientsLength(patients.length);
  }, []);
  return (
    <>
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
    </>
  );
}

export default PatientList;
