import React, { ReactElement, useEffect, useRef, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { BsArrowRightCircle } from "react-icons/all";
import ModalHistopathology from "~/components/menu/modal_create_diagnosis/ModalHistopathology";
import PatientSelect from "~/components/menu/modal_create_diagnosis/PatientSelect";

interface IProps {
  onClose: () => void;
  // openHistopathology: () => void;
  // openCytology: () => void;
  // openBiopsy: () => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreateDiagnosis({
  onClose,
  refModal,
}: // openBiopsy,
// openHistopathology,
// openCytology,
IProps): ReactElement {
  const [active, setActive] = useState<string>("");

  const handleCreateType = (active: string) => {
    // if (active === "1") {
    //   openHistopathology();
    //   // onClose();
    // }
    // if (active === "2") {
    //   openCytology();
    //   // onClose();
    // }
    // if (active === "3") {
    //   openBiopsy();
    //   // onClose();
    // }
  };
  useEffect(() => {
    handleCreateType(active);
  }, [active]);
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={onClose} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Crear Diagnóstico</h1>
          <div className="flex w-full flex-col p-2">
            <PatientSelect />
            <div className="flex w-full items-center">
              <div className="w-full">
                <input type="radio" value="1" id="histo" name="type" className="peer hidden" />
                <label
                  id="histo"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-indigo-700 p-2 text-center font-semibold text-white hover:bg-indigo-600 peer-checked:border-4 peer-checked:border-indigo-400"
                  htmlFor="histo"
                  onClick={() => setActive("1")}
                >
                  <span className="w-full">Histopatológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="2" id="cito" name="type" className="peer hidden" />
                <label
                  id="cito"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-lime-600 p-2 text-center font-semibold text-white hover:bg-lime-500 peer-checked:border-4 peer-checked:border-lime-300"
                  htmlFor="cito"
                  onClick={() => setActive("2")}
                >
                  <span className="w-full">Citológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="3" id="bio" name="type" className="peer hidden" />
                <label
                  id="bio"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-pink-700 p-2 text-center font-semibold text-white hover:bg-pink-600 peer-checked:border-4 peer-checked:border-pink-400"
                  htmlFor="bio"
                  onClick={() => setActive("3")}
                >
                  <span className="w-full">PAP</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
            </div>
          </div>
          {active === "1" && <ModalHistopathology />}
          {active === "2" && (
            <div className="h-full w-full items-center justify-center bg-slate-600">
              <h1>Citologia</h1>
            </div>
          )}
          {active === "3" && <div>Biopsia</div>}
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalCreateDiagnosis;
