import React, { ReactNode, useEffect, useRef, useState } from "react";
import GeneralField from "~/components/GeneralField";
import cardOptions from "~/constants/options/card.options";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

function ModalCard({ onClose, children }: ModalProps): JSX.Element {
  const [childState, setChildState] = useState<string>("");

  return (
    <div className="fixed inset-0 z-30 flex h-60 w-60 items-center justify-center bg-fuchsia-600 transition-colors">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 rounded-lg bg-white p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
      >
        x
      </button>
      <div>{children}</div>
    </div>
    // <div
    //   onClick={onClose}
    //   className={`${
    //     childState ? "visible bg-black/20" : "invisible"
    //   }fixed inset-0 z-30 flex items-center justify-center transition-colors`}
    // >
    //   <div
    //     onClick={(e) => e.stopPropagation()}
    //     className={`rounded-xl bg-white p-6 shadow transition-all ${
    //       childState ? "scale-100 opacity-100" : "scale-125 opacity-0"
    //     }`}
    //   >
    //     <button
    //       onClick={onClose}
    //       className="absolute right-2 top-2 rounded-lg bg-white p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
    //     >
    //       <h1>X</h1>
    //     </button>
    //     {children}
    //   </div>
    //   {/*<GeneralField fieldObj={cardOptions.card.fields[0]} />*/}
    // </div>
  );
}

export default ModalCard;
