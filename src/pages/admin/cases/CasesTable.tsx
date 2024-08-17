import React, { useContext } from "react";
import CaseCard from "~/pages/admin/cases/components/CaseCard";
import { AnimatePresence, motion } from "framer-motion";
import AdminContext from "~/pages/admin/context/AdminContext";
import { OpCase } from "~/interfaces/Case.interface";

function CasesTable() {
  const { casesList } = useContext(AdminContext);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="container grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1.5 }}
        >
          {casesList &&
            casesList.length > 0 &&
            casesList.map((item: OpCase, index: React.Key) => (
              <div key={index}>
                <CaseCard caseData={item} key={index} />
              </div>
            ))}
          {casesList.length === 0 && (
            <div className="col-span-4">
              <p className="text-center text-xl font-bold">No hay casos</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default CasesTable;
