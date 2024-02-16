import { Report } from "~/interfaces/Report.type";
import DiagnosisCard from "~/pages/diagnoses/components/DiagnosisCard";
import React, { useEffect, useState } from "react";

interface DiagnosisListProps {
  diagnoses: Report[];
  // diagnosisLength: number;
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
  const [diagnosisLength, setDiagnosisLength] = useState<number>(0);
  useEffect(() => {
    if (diagnoses.length > 0) setDiagnosisLength(diagnoses.length);
  }, [diagnoses]);
  return (
    <div
      className={`${
        diagnosisLength < 1
          ? "flex h-full w-full items-center justify-center"
          : "mt-20 grid h-auto grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      }
            mx-10 gap-6 py-4`}
    >
      {diagnosisLength > 0 &&
        diagnoses.map((diagnosis: Report) => (
          <DiagnosisCard
            key={diagnosis.id}
            diagnosis={diagnosis}
            setModalEdit={handleModalEdit}
            setModalShow={handleModalShow}
            setModalDelete={handleModalDelete}
          />
        ))}
      {diagnosisLength < 1 && (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-2xl dark:text-white">No se encontraron diagnósticos</h1>
        </div>
      )}
    </div>
  );
}

export default DiagnosisList;
