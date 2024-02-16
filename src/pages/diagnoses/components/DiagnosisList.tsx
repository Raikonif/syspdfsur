import { Report } from "~/interfaces/Report.type";
import DiagnosisCard from "~/pages/diagnoses/components/DiagnosisCard";
import React, { useEffect, useState } from "react";

interface DiagnosisListProps {
  diagnoses: Report[];
  handleModalEdit: (newState: boolean) => void;
  handleModalShow: (newState: boolean) => void;
  handleModalDelete: (newState: boolean) => void;
}
function DiagnosisList({
  diagnoses,
  handleModalEdit,
  handleModalShow,
  handleModalDelete,
}: DiagnosisListProps) {
  const [diagnosesLength, setDiagnosesLength] = useState<number>(0);
  useEffect(() => {
    if (diagnoses.length > 0) setDiagnosesLength(diagnoses.length);
  }, [diagnoses]);
  return (
    <>
      {/* <div*/}
      {/*   className={`${*/}
      {/*     diagnosesLength < 1*/}
      {/*       ? "flex h-full w-full items-center justify-center"*/}
      {/*       : "mt-20 grid h-auto grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"*/}
      {/*   }*/}
      {/*         mx-10 gap-6 py-4`}*/}
      {/* >*/}
      <ul className="mt-2 grid px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {diagnosesLength > 0 &&
          diagnoses.map((diagnosis: Report) => (
            <li key={diagnosis.id} className="mx-2">
              <DiagnosisCard
                key={diagnosis.id}
                diagnosis={diagnosis}
                setModalEdit={handleModalEdit}
                setModalShow={handleModalShow}
                setModalDelete={handleModalDelete}
              />
            </li>
          ))}
      </ul>
      {diagnosesLength < 1 && (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-2xl dark:text-white">No se encontraron diagnósticos</h1>
        </div>
      )}
    </>
  );
}

export default DiagnosisList;
