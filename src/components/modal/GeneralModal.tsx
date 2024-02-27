import React, { ReactElement, ReactNode } from "react";
import useOutsideClick from "~/hooks/useOutsideClick";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  refModal: React.RefObject<HTMLDivElement>;
  customWidth?: string;
  customHeight?: string;
  buttonClose?: boolean;
}

function GeneralModal({
  onClose,
  children,
  refModal,
  customWidth = "w-5/6",
  customHeight = "h-5/6",
  buttonClose = true,
}: ModalProps): ReactElement {
  useOutsideClick({ ref: refModal, onOutsideClick: onClose });
  return (
    <>
      <div
        ref={refModal}
        className={`fixed inset-0 flex items-center ${customWidth} ${customHeight} justify-center rounded-xl bg-white shadow-2xl transition-colors`}
      >
        {buttonClose && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-lg bg-slate-50 p-1 text-gray-400 hover:bg-gray-50 hover:text-fuchsia-600 sm:px-3"
          >
            X
          </button>
        )}
        <div className="flex w-full justify-center">{children}</div>
      </div>
    </>
  );
}

export default GeneralModal;
