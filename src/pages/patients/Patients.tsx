import React, { useEffect, useRef, useState } from "react";
import PatientCard from "~/pages/patients/components/PatientCard";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";

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

  const objField = {
    name: "description",
    id: 1,
    type: "text",
    value: description,
    placeholder: "description",
  };
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mx-10 grid h-auto grid-cols-5 justify-between gap-6 py-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
          <GeneralModal onClose={() => setShowModal(false)} refModal={refModal}>
            <div className="flex justify-center">
              <h1>Editar Paciente</h1>
              <div></div>
              <GeneralField fieldObj={objField} />
            </div>
          </GeneralModal>
        </div>
      )}
    </div>
  );
}

export default Patients;
