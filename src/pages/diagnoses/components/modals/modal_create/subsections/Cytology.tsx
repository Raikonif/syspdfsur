import React, { ReactElement } from "react";
import GeneralModal from "~/components/modal/GeneralModal";

interface IProps {
  onClose: () => void;
  refModal: React.RefObject<HTMLDivElement>;
}
function Cytology({ onClose, refModal }: IProps): ReactElement {
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={onClose} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-start">
          <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Create Cytopathology</h1>
          <div className="w-full p-2"></div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default Cytology;
