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
  }, [patients]);
  return (
    <>
      <ul className="mt-2 grid px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {patientsLength > 0 &&
          patients.map((patient: Patient) => (
            <li key={patient.id} className="mx-2">
              <PatientCard patient={patient} />
            </li>
          ))}
      </ul>
      {patientsLength < 1 && (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-2xl dark:text-white">No se encontraron pacientes</h1>
        </div>
      )}
    </>
  );
}

export default PatientList;
