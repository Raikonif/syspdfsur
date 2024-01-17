import React, { ReactElement, useEffect, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { BsArrowRightCircle } from "react-icons/all";

interface IProps {
  onClose: () => void;
  openHistopathology: () => void;
  openCytopathology: () => void;
  openBiopsy: () => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreate({
  onClose,
  refModal,
  openBiopsy,
  openHistopathology,
  openCytopathology,
}: IProps): ReactElement {
  const [active, setActive] = useState<string>("");

  const handleCreateType = (active: string) => {
    if (active === "1") {
      openHistopathology();
      onClose();
    }
    if (active === "2") {
      openCytopathology();
      onClose();
    }
    if (active === "3") {
      openBiopsy();
      onClose();
    }
  };
  useEffect(() => {
    handleCreateType(active);
  }, [active]);

  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={onClose} refModal={refModal} customWidth="w-100" customHeight="h-100">
        <div className="flex h-full w-full flex-col items-start">
          <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Create Diagnosis</h1>
          <div className="w-full p-2">
            <div className=" flex w-full flex-col justify-center">
              <div className="w-full">
                <input type="radio" value="1" id="histopato" name="type" className="peer hidden" />
                <label
                  id="histopato"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-fuchsia-600 p-3 text-center font-semibold text-white hover:bg-fuchsia-500 active:bg-fuchsia-700 peer-checked:bg-violet-500"
                  htmlFor="histopato"
                  onClick={() => setActive("1")}
                >
                  <span className="w-full">Histopatológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="2" id="citopato" name="type" className="peer hidden" />
                <label
                  id="citopato"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-fuchsia-600 p-3 text-center font-semibold text-white hover:bg-fuchsia-500 active:bg-fuchsia-700 peer-checked:bg-violet-500"
                  htmlFor="citopato"
                  onClick={() => setActive("2")}
                >
                  <span className="w-full">CitoPatológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="3" id="biopsia" name="type" className="peer hidden" />
                <label
                  id="biopsia"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-fuchsia-600 p-3 text-center font-semibold text-white hover:bg-fuchsia-500 active:bg-fuchsia-700 peer-checked:bg-violet-500"
                  htmlFor="otro"
                  onClick={() => setActive("3")}
                >
                  <span className="w-full">Biopsia</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalCreate;
