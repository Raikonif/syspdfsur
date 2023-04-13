import React from "react";
import PatientCard from "~/components/PatientCard";

function Patients(): JSX.Element {
  return (
    <div>
      <div className="m-10 mb-10 grid h-auto grid-cols-5 justify-between gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </div>
    </div>
  );
}

export default Patients;
