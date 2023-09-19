import React, { useEffect, useState } from "react";
import { IReportForm } from "~/interfaces/Report.type";

function useValidateReport(report: IReportForm) {
  const [isValid, setIsValid] = useState(false);

  const onChangeValuesReport = () => {
    return Object.values(report).every((value) => {
      return value !== "" && value !== 0 && value !== null;
    });
  };

  useEffect(() => {
    setIsValid(onChangeValuesReport());
  }, [report]);

  return isValid;
}

export default useValidateReport;
