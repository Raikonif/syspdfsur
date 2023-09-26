import React, { useState, useEffect } from "react";
import { GenericObject } from "~/interfaces/SubReports.interface";

const SLIDES = "slides";
const BLOCKS = "blocks";
const CLINICAL_HISTORY = "clinicalHistory";
function useCleanOptionalKeys<T extends GenericObject>(subReport: T) {
  const [subReportCleaned, setSubReportCleaned] = useState<T>({} as T);
  const onChangeValuesSubReport = () => {
    for (const [key, value] of Object.entries(subReport)) {
      if (key !== SLIDES) {
        setSubReportCleaned((prev) => ({ ...prev, [key]: value }));
      }
    }
    console.log(subReportCleaned);
  };
  useEffect(() => {
    onChangeValuesSubReport();
  }, [subReport]);
  return subReportCleaned;
}

export default useCleanOptionalKeys;
