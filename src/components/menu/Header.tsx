import React, { useEffect, useRef, useState } from "react";
import GeneralButton from "~/components/GeneralButton";
import { AiOutlineHeart, BiPlusMedical } from "react-icons/all";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";
import ModalCreateDiagnosis from "~/components/menu/modal_create_diagnosis/ModalCreateDiagnosis";
import ModalHistopathology from "~/components/menu/modal_create_diagnosis/ModalHistopathology";
import ModalCytology from "~/components/menu/modal_create_diagnosis/ModalCytology";
import ModalBiopsy from "~/components/menu/modal_create_diagnosis/ModalBiopsy";

function Header(): JSX.Element {
  const [desktopMode, setDesktopMode] = useState<boolean>(false);
  const [modalAddPatient, setModalAddPatient] = useState<boolean>(false);
  const refModalAddPatient = useRef<HTMLDivElement>(null);
  const refModalHistopathology = useRef<HTMLDivElement>(null);
  const refModalCitopathology = useRef<HTMLDivElement>(null);
  const refModalBiopsy = useRef<HTMLDivElement>(null);

  const [openHistopathology, setOpenHistopathology] = useState<boolean>(false);
  const [openCitopathology, setOpenCitopathology] = useState<boolean>(false);
  const [openBiopsy, setOpenBiopsy] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth < 640 ? setDesktopMode(false) : setDesktopMode(true);
  });
  return (
    <>
      <div className="flex w-full">
        {desktopMode && (
          <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-100">
            <div>Header</div>
            <button
              className="fixed right-14 top-5 flex items-center rounded-xl bg-fuchsia-600"
              onClick={() => setModalAddPatient(true)}
            >
              <span className="m-1 ml-2 p-1 text-white">New Diagnosis</span>
              <BiPlusMedical className="m-1 mr-2 text-white" />
            </button>
          </div>
        )}
        {modalAddPatient && (
          <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
            <ModalCreateDiagnosis
              onClose={() => setModalAddPatient(false)}
              refModal={refModalAddPatient}
              // openBiopsy={() => setOpenBiopsy(true)}
              // openCytology={() => setOpenCitopathology(true)}
              // openHistopathology={() => setOpenHistopathology(true)}
            />
          </div>
        )}
        {/*{openHistopathology && (*/}
        {/*  <ModalHistopathology*/}
        {/*    onClose={() => setOpenHistopathology(false)}*/}
        {/*    refModal={refModalHistopathology}*/}
        {/*  />*/}
        {/*)}*/}
        {/*{openCitopathology && (*/}
        {/*  <ModalCytology*/}
        {/*    onClose={() => setOpenCitopathology(false)}*/}
        {/*    refModal={refModalCitopathology}*/}
        {/*  />*/}
        {/*)}*/}
        {/*{openBiopsy && (*/}
        {/*  <ModalBiopsy onClose={() => setOpenBiopsy(false)} refModal={refModalBiopsy} />*/}
        {/*)}*/}
      </div>
    </>
  );
}

export default Header;
