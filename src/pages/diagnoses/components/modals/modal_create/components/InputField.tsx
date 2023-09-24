import React from "react";
import { IReportForm } from "~/interfaces/Report.type";

interface IProps {
  type?: string;
  placeholder: string;
  name: string;
  report: IReportForm;
  setReport: (report: IReportForm) => void;
}
function InputField({ type = "text", placeholder, name, report, setReport }: IProps) {
  return (
    <>
      <input
        type={type}
        value={report.clinical_diagnosis}
        id={name}
        name={name}
        aria-autocomplete="none"
        placeholder={placeholder}
        onChange={(e) => setReport({ ...report, clinical_diagnosis: e.target.value })}
        className="m-1 mt-2 w-1/2 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
      />
    </>
  );
}
export default InputField;
