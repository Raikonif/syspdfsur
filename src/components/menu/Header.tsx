import React, { useEffect, useRef, useState } from "react";
import GeneralButton from "~/components/GeneralButton";
import { AiOutlineHeart, BiPlusMedical } from "react-icons/all";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";
import { RadioGroup } from "@headlessui/react";
import ModalCreate from "~/components/menu/ModalCreate";
import ModalHistopathology from "~/components/menu/ModalHistopathology";
import ModalCytopathology from "~/components/menu/ModalCytopathology";
import ModalBiopsy from "~/components/menu/ModalBiopsy";

function Header(): JSX.Element {
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
  const handleClickOption = (option: string) => {
    setOption(option);
  };
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
            <ModalCreate
              onClose={() => setModalAddPatient(false)}
              refModal={refModalAddPatient}
              openBiopsy={() => setOpenBiopsy(true)}
              openCytopathology={() => setOpenCitopathology(true)}
              openHistopathology={() => setOpenHistopathology(true)}
            />
          </div>
        )}
        {openHistopathology && (
          <ModalHistopathology
            onClose={() => setOpenHistopathology(false)}
            refModal={refModalHistopathology}
          />
        )}
        {openCitopathology && (
          <ModalCytopathology
            onClose={() => setOpenCitopathology(false)}
            refModal={refModalCitopathology}
          />
        )}
        {openBiopsy && (
          <ModalBiopsy onClose={() => setOpenBiopsy(false)} refModal={refModalBiopsy} />
        )}
      </div>
    </>
  );
}

export default Header;
