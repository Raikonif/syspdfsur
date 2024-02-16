import React, { ReactElement, useEffect, useRef, useState } from "react";
import DiagnosisCard from "~/pages/diagnoses/components/DiagnosisCard";
import { Report } from "~/interfaces/Report.type";
import { getReports } from "~/service/report.service";
import Header from "./components/Header";
import ModalDelete from "~/pages/diagnoses/components/modals/ModalDelete";
import ModalShow from "~/pages/diagnoses/components/modals/ModalShow";
import ModalEdit from "~/pages/diagnoses/components/modals/ModalEdit";
import ModalCreateReport from "~/pages/diagnoses/components/modals/modal_create/ModalCreateReport";

function Diagnoses(): ReactElement {
  const [showModalEdit, setShowModalEdit] = useState<boolean>(false);
  const [showModalShow, setShowModalShow] = useState<boolean>(false);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const refModalShow = useRef<HTMLDivElement>(null);
  const refModalEdit = useRef<HTMLDivElement>(null);
  const refModalDelete = useRef<HTMLDivElement>(null);
  const refModalCreate = useRef<HTMLDivElement>(null);
  const [diagnoses, setDiagnoses] = useState<Report[]>([] as Report[]);
  const [diagnosisLength, setDiagnosisLength] = useState<number>(0);
  const handleModalCreate = (newState: boolean) => {
    setShowModalCreate(newState);
  };
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
    setDiagnoses(await getReports());
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

  useEffect(() => {
    if (diagnoses.length > 0) setDiagnosisLength(diagnoses.length);
  }, [diagnoses]);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Header setModalCreate={handleModalCreate} />
        <div
          className={`${
            diagnosisLength < 1
              ? "flex h-full w-full items-center justify-center"
              : "mt-20 grid h-auto grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          }
            mx-10 gap-6 py-4`}
        >
          {diagnosisLength > 0 &&
            diagnoses.map((diagnosis: Report) => (
              <DiagnosisCard
                key={diagnosis.id}
                diagnosis={diagnosis}
                setModalEdit={handleModalEdit}
                setModalShow={handleModalShow}
                setModalDelete={handleModalDelete}
              />
            ))}
          {diagnosisLength < 1 && (
            <div className="flex h-full w-full items-center justify-center">
              <h1 className="text-2xl dark:text-white">No se encontraron diagnósticos</h1>
            </div>
          )}
        </div>
      </div>
      {showModalEdit && <ModalEdit onClose={handleModalEdit} refModal={refModalEdit} />}
      {showModalShow && <ModalShow onClose={handleModalShow} refModal={refModalShow} />}
      {showModalDelete && <ModalDelete onClose={handleModalDelete} refModal={refModalDelete} />}
      {showModalCreate && (
        <ModalCreateReport onClose={handleModalCreate} refModal={refModalCreate} />
      )}
    </>
  );
}

export default Diagnoses;
