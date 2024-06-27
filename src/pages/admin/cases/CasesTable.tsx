import React from "react";
import CaseCard from "~/pages/admin/cases/components/CaseCard";
function CasesTable() {
  return (
    <div className="container grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
        <div key={index} className="flex w-full">
          <CaseCard />
        </div>
      ))}
    </div>
  );
}

export default CasesTable;
