import React, { useState } from "react";
import PatientCard from "~/components/PatientCard";
import ModalCard from "~/components/ModalCard";

function Patients(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleChildStateChange = (newState: boolean) => {
    setShowModal(newState);
    console.log("modal", showModal);
  };
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vi elit. Lorem Ipsum dolor sit amet";
  return (
    <div className="flex items-center justify-center">
      <div className="m-10 mb-10 mt-14 grid h-auto grid-cols-5 justify-between gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
        <PatientCard description={description} setModalBool={handleChildStateChange} />
      </div>
      {showModal && (
        <div>
          <ModalCard onClose={() => setShowModal(false)}>
            <h1>Soy un modal</h1>
          </ModalCard>
        </div>
      )}
    </div>
  );
}

export default Patients;
