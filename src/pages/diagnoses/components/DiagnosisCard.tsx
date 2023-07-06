import React, { useEffect, useState } from "react";
import { MdEditSquare, RiDeleteBinFill } from "react-icons/all";
import Diagnosis from "~/interfaces/Diagnosis.type";

interface IProps {
  diagnosis: Diagnosis;
  setModalEdit: (isOpen: boolean) => void;
  setModalShow: (isOpen: boolean) => void;
  setModalDelete: (isOpen: boolean) => void;
}

function DiagnosisCard({
  diagnosis,
  setModalEdit,
  setModalShow,
  setModalDelete,
}: IProps): JSX.Element {
  const [currentDescription, setCurrentDescription] = useState<string>(diagnosis.description);
  const maxLength = 60;

  useEffect(() => {
    if (maxLength < currentDescription.length) {
      setCurrentDescription(currentDescription.slice(0, maxLength) + "...");
    }
  }, [currentDescription]);

  return (
    <div className="duration-300 hover:scale-110">
      <div onClick={() => setModalShow(true)}>
        <article className="container rounded-2xl bg-white p-5 shadow-2xl">
          <h1 className="font-bold text-fuchsia-600">Patient Card</h1>
          <p className="font-light text-gray-500 active:text-gray-400">{currentDescription}</p>
          <h6 className="mb-5 text-sm text-gray-300 active:text-gray-200">Date 12/04/2023</h6>
          <div className="flex justify-between">
            <button
              className="h-6 w-6 hover:scale-110"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setModalEdit(true);
                event.stopPropagation();
              }}
            >
              <MdEditSquare className="h-full w-full text-fuchsia-600 hover:text-fuchsia-500" />
            </button>
            <button
              className="h-6 w-6 hover:scale-110"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setModalDelete(true);
                event.stopPropagation();
              }}
            >
              <RiDeleteBinFill className="h-full w-full text-fuchsia-600 hover:text-fuchsia-500" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default DiagnosisCard;
