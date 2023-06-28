import React, { ReactElement, ReactNode } from "react";
import useOutsideClick from "~/hooks/useOutsideClick";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  refModal: React.RefObject<HTMLDivElement>;
  customWidth?: string;
  customHeight?: string;
}

function GeneralModal({
  onClose,
  children,
  refModal,
  customWidth = "w=5/6",
  customHeight = "h-5/6",
}: ModalProps): ReactElement {
  useOutsideClick({ ref: refModal, onOutsideClick: onClose });
  return (
    <>
      <div
        ref={refModal}
        className={`fixed flex ${customWidth} ${customHeight} justify-center rounded-xl bg-white shadow-2xl transition-colors`}
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
