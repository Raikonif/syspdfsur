import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  refModal: React.RefObject<HTMLDivElement>;
}

function GeneralModal({ onClose, children, refModal }: ModalProps): JSX.Element {
  return (
    <>
      <div
        ref={refModal}
        className="fixed flex h-5/6 w-5/6 justify-center rounded-xl bg-white shadow-2xl transition-colors"
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-lg bg-slate-50 p-1 px-3 text-gray-400 hover:bg-gray-50 hover:text-fuchsia-600"
        >
          X
        </button>
        <div className="flex w-full justify-center px-10 py-10 xs:px-4 xs:py-8">{children}</div>
      </div>
    </>
  );
}

export default GeneralModal;
