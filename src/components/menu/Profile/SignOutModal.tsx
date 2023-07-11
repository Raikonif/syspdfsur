import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import GeneralModal from "~/components/modal/GeneralModal";

interface IProps {
  onClose: (change: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}
function SignOutModal({ onClose, refModal }: IProps): ReactElement {
  const navigate = useNavigate();
  const closeSession = () => {
    navigate("/auth");
  };
  // TODO: Add the OutsideClickHandler
  return (
    <div className="fixed inset-0 z-auto flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal
        onClose={() => onClose(false)}
        refModal={refModal}
        customWidth={"w-1/3"}
        customHeight={"w-1/4"}
        buttonClose={false}
      >
        <div className="flex w-5/6 flex-col">
          <h1 className="py-3 font-sans"> Quieres cerrar sesion??</h1>
          <div className="flex items-center justify-between py-3">
            <button
              className="mr-2 w-full rounded-lg bg-violet-700 py-1 text-white"
              onClick={() => closeSession}
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

export default SignOutModal;
