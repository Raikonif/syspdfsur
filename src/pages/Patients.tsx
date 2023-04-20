import React, { useEffect, useRef, useState } from "react";
import PatientCard from "~/components/PatientCard";
import GeneralModal from "~/components/modal/GeneralModal";

function Patients(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const refModal = useRef<HTMLDivElement>(null);
  const handleChildStateChange = (newState: boolean) => {
    setShowModal(newState);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refModal.current && !refModal.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refModal]);
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
        <div
          className="fixed h-screen content-center items-center justify-center bg-slate-50"
          ref={refModal}
        >
          <GeneralModal onClose={() => setShowModal(false)}>
            <h1>Soy un modal</h1>
          </GeneralModal>
        </div>
      )}
    </div>
  );
}

export default Patients;
