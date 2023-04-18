import React from "react";
import PatientCard from "~/components/PatientCard";

function Patients(): JSX.Element {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vi elit. Lorem Ipsum dolor sit amet";
  return (
    <div className="flex items-center justify-center">
      <div className="m-10 mb-10 mt-14 grid h-auto grid-cols-5 justify-between gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
        <PatientCard description={description} />
      </div>
    </div>
  );
}

export default Patients;
