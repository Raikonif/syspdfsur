import React, { ReactElement } from "react";
import GeneralModal from "~/components/modal/GeneralModal";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}
function ModalShow({ onClose, refModal }: IProps): ReactElement {
  return (
    <div className="fixed inset-0 z-10 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={() => onClose(false)} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="pb-10 text-3xl font-bold">Show Patient</h1>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalShow;
