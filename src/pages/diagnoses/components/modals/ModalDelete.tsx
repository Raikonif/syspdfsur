import React, { ReactElement } from "react";
import GeneralModal from "~/components/modal/GeneralModal";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalDelete({ onClose, refModal }: IProps): ReactElement {
  return (
    <div className="fixed inset-0 z-10 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal
        onClose={() => onClose(false)}
        refModal={refModal}
        customWidth={"w-1/3"}
        customHeight={"w-1/4"}
        buttonClose={false}
      >
        <div className="flex w-5/6 flex-col">
          <h1 className="py-3 font-sans">Estas segura de querer Borrar este paciente?</h1>
          <div className="flex items-center justify-between py-3">
            <button
              className="mr-2 w-full rounded-lg bg-violet-700 py-1 text-white"
              onClick={() => onClose(false)}
            >
              Borrar
            </button>
            <button
              className="ml-2 w-full rounded-lg bg-slate-400 py-1 text-white"
              onClick={() => onClose(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalDelete;
