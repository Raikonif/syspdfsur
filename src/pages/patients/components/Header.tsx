import React, { ReactElement, useEffect, useRef, useState } from "react";
import GeneralButton from "~/components/GeneralButton";
import { AiOutlineHeart, BiPlusMedical } from "react-icons/all";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";
import ModalCreateDiagnosis from "~/pages/patients/components/modal_create_diagnosis/ModalCreateDiagnosis";
import ModalHistopathology from "~/pages/patients/components/modal_create_diagnosis/ModalHistopathology";
import ModalCytology from "~/pages/patients/components/modal_create_diagnosis/ModalCytology";
import ModalBiopsy from "~/pages/patients/components/modal_create_diagnosis/ModalBiopsy";
function Header(): ReactElement {
  const [desktopMode, setDesktopMode] = useState<boolean>(false);
  const [modalAddPatient, setModalAddPatient] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");
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
    <div className="fixed left-40 right-0 top-0 z-10">
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
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
