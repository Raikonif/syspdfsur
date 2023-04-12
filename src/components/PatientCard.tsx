import React from "react";

function PatientCard(): JSX.Element {
  return (
    <div>
      <article className="container bg-white shadow-2xl rounded-2xl p-5">
        <h1 className="font-bold text-fuchsia-600">Patient Card</h1>
        <p className="font-light text-gray-500">This is a Description</p>
        <h6 className="text-sm text-gray-300 mb-5">Date 12/04/2023</h6>
      </article>
    </div>
  );
}

export default PatientCard;
