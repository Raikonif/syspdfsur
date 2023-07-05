import React, { ReactElement, useEffect, useRef, useState } from "react";
import PatientCard from "~/pages/patients/components/PatientCard";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";
import GeneralButton from "~/components/GeneralButton";
import Diagnosis from "~/interfaces/Diagnosis.type";
import { getDiagnoses } from "~/service/diagnosis.service";
import Header from "./components/Header";
import SearchButton from "~/components/menu/search/SearchButton";

function Patients(): ReactElement {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [showModalShow, setShowModalShow] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const refModalShow = useRef<HTMLDivElement>(null);
  const refModalEdit = useRef<HTMLDivElement>(null);
  const refModalDelete = useRef<HTMLDivElement>(null);
  const refModalAdd = useRef<HTMLDivElement>(null);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([] as Diagnosis[]);
  const handleModalEdit = (newState: boolean) => {
    setShowModalEdit(newState);
  };
  const handleModalShow = (newState: boolean) => {
    setShowModalShow(newState);
  };
  const handleModalDelete = (newState: boolean) => {
    setShowModalDelete(newState);
  };
  const getAllDiagnoses = async () => {
    setDiagnoses(await getDiagnoses());
  };

  useEffect(() => {
    const handleMobileMode = () => {
      if (window.innerWidth < 640) {
        setMobileMode(true);
      } else {
        setMobileMode(false);
      }
    };
    window.addEventListener("resize", handleMobileMode);
    return () => {
      window.removeEventListener("resize", handleMobileMode);
    };
  }, []);

  useEffect(() => {
    getAllDiagnoses();
  }, [showModalDelete, showModalEdit, showModalShow]);

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
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Header />
        <SearchButton isMobileMode={mobileMode} />
        <div className="mx-10 mt-20 grid h-auto grid-cols-5 justify-between gap-6 py-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {diagnoses.map((diagnosis: Diagnosis) => (
            <PatientCard
              key={diagnosis.id}
              diagnosis={diagnosis}
              setModalEdit={handleModalEdit}
              setModalShow={handleModalShow}
              setModalDelete={handleModalDelete}
            />
          ))}
        </div>
      </div>
      {showModalEdit && (
        <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
          <GeneralModal onClose={() => setShowModalEdit(false)} refModal={refModalEdit}>
            <div className="flex h-full w-full flex-col items-center">
              <h1 className="pb-10 text-3xl font-bold">Edit Patient</h1>
              <GeneralField fieldObj={objField} />
              <GeneralField fieldObj={objField} />
              <GeneralField fieldObj={objField} />
              <div className="flex w-full">
                <GeneralField fieldObj={objField} />
                <GeneralField fieldObj={objField} />
              </div>
              <div className="flex w-full">
                <GeneralField fieldObj={objField} />
                <GeneralField fieldObj={objField} />
                <GeneralField fieldObj={objField} />
              </div>
              <div className="absolute bottom-7 right-7">
                <GeneralButton
                  textButton={"Save Changes"}
                  btnType={"submit"}
                  action={() => setShowModalEdit(false)}
                />
              </div>
            </div>
          </GeneralModal>
        </div>
      )}
      {showModalShow && (
        <div className="fixed inset-0 z-10 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
          <GeneralModal onClose={() => setShowModalShow(false)} refModal={refModalShow}>
            <div className="flex h-full w-full flex-col items-center">
              <h1 className="pb-10 text-3xl font-bold">Show Patient</h1>
            </div>
          </GeneralModal>
        </div>
      )}
      {showModalDelete && (
        <div className="fixed inset-0 z-10 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
          <GeneralModal
            onClose={() => setShowModalDelete(false)}
            refModal={refModalDelete}
            customWidth={"1/3"}
            customHeight={"1/4"}
          >
            <div className="flex w-5/6 flex-col">
              <h1 className="py-3 font-sans">Estas segura de querer Borrar este paciente?</h1>
              <div className="flex items-center justify-between py-3">
                <button
                  className="mr-2 w-full rounded-lg bg-violet-700 py-1 text-white"
                  onClick={() => setShowModalDelete(false)}
                >
                  Borrar
                </button>
                <button
                  className="ml-2 w-full rounded-lg bg-slate-400 py-1 text-white"
                  onClick={() => setShowModalDelete(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </GeneralModal>
        </div>
      )}
    </>
  );
}

export default Patients;
