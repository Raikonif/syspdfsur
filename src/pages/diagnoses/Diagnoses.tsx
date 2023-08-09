import React, { ReactElement, useEffect, useRef, useState } from "react";
import DiagnosisCard from "~/pages/diagnoses/components/DiagnosisCard";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";
import GeneralButton from "~/components/GeneralButton";
import { Report } from "~/interfaces/Report.type";
import { getReports } from "~/service/report.service";
import Header from "./components/Header";
import SearchButton from "~/components/menu/search/SearchButton";
import ModalDelete from "~/pages/diagnoses/components/modals/ModalDelete";
import ModalShow from "~/pages/diagnoses/components/modals/ModalShow";
import ModalEdit from "~/pages/diagnoses/components/modals/ModalEdit";
import ModalCreate from "~/pages/diagnoses/components/modals/modal_create/ModalCreate";

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
        <Header setModalCreate={handleModalCreate} />

        <div className="mx-10 mt-20 grid h-auto grid-cols-5 justify-between gap-6 py-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {diagnoses.map((diagnosis: Report) => (
            <DiagnosisCard
              key={diagnosis.id}
              diagnosis={diagnosis}
              setModalEdit={handleModalEdit}
              setModalShow={handleModalShow}
              setModalDelete={handleModalDelete}
            />
          ))}
        </div>
      </div>
      {showModalEdit && <ModalEdit onClose={handleModalEdit} refModal={refModalEdit} />}
      {showModalShow && <ModalShow onClose={handleModalShow} refModal={refModalShow} />}
      {showModalDelete && <ModalDelete onClose={handleModalDelete} refModal={refModalDelete} />}
      {showModalCreate && <ModalCreate onClose={handleModalCreate} refModal={refModalCreate} />}
    </>
  );
}

export default Diagnoses;
