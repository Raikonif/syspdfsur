import React, { ReactElement } from "react";
import GeneralModal from "~/components/modal/GeneralModal";

// interface IProps {
// onClose: () => void;
// refModal: React.RefObject<HTMLDivElement>;
// }
function ModalHistopathology(): ReactElement {
  return (
    <div className="flex h-full w-full flex-col items-center bg-slate-600 ">
      <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Create Histopathology</h1>
    </div>
  );
}

export default ModalHistopathology;
