import React, { useEffect, useState } from "react";
import { IReportForm } from "~/interfaces/Report.type";
import { IHistopathologyReportForm } from "~/interfaces/SubReports.interface";

function useValidateReport(report: IReportForm | IHistopathologyReportForm) {
  const [isValid, setIsValid] = useState(false);

  const onChangeValuesReport = () => {
    return Object.entries(report).every(([key, value]) => {
      if (key !== "slides") {
        return value !== "" && value !== 0 && value !== null;
      }
    });
  };

  useEffect(() => {
    setIsValid(onChangeValuesReport());
  }, [report]);

  return isValid;
}

export default useValidateReport;
