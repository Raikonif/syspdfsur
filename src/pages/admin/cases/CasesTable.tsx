import React, { useContext } from "react";
import CaseCard from "~/pages/admin/cases/components/CaseCard";
import { AnimatePresence, motion } from "framer-motion";
import AdminContext from "~/pages/admin/context/AdminContext";
import { Case, OpCase } from "~/interfaces/Case.interface";

function CasesTable() {
  const { cases } = useContext(AdminContext);
  return (
    <AnimatePresence>
      <motion.div
        className="container grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5 }}
      >
        {cases.data.length > 0 &&
          cases.data.map((item: OpCase, index: React.Key) => (
            <div key={index} className="flex w-full justify-center">
              <CaseCard data={item} />
            </div>
          ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default CasesTable;
