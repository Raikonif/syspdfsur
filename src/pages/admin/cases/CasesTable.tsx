import React from "react";
import CaseCard from "~/pages/admin/cases/components/CaseCard";
import { AnimatePresence, motion } from "framer-motion";
function CasesTable() {
  return (
    <AnimatePresence>
      <motion.div
        className="container grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
          <div key={index} className="flex w-full">
            <CaseCard />
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default CasesTable;
