import React from "react";
import { IReportForm } from "~/interfaces/Report.type";

interface IProps {
  report: IReportForm;
  setReport: (report: IReportForm) => void;
}
function InputFields({ report, setReport }: IProps) {
  return (
    <>
      <input
        type="text"
        value={report.clinical_diagnosis}
        id="cli_diagnosis"
        name="cli_diagnosis"
        aria-autocomplete="none"
        placeholder="Diagnostico Clinico *"
        onChange={(e) => setReport({ ...report, clinical_diagnosis: e.target.value })}
        className="m-1 mt-2 w-1/2 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
      />
      <div className="flex w-1/2">
        <input
          type="text"
          value={report.service}
          id="service"
          name="service"
          aria-autocomplete="none"
          placeholder="Servicio/Centro *"
          onChange={(e) => setReport({ ...report, service: e.target.value })}
          className="m-1 mt-2 w-1/2 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
        <input
          type="text"
          value={report.study_code}
          id="study_code"
          name="study_code"
          aria-autocomplete="none"
          placeholder="Numero de Estudio *"
          onChange={(e) => setReport({ ...report, study_code: e.target.value })}
          className="m-1 mt-2 w-1/2 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
      </div>
    </>
  );
}
export default InputFields;
