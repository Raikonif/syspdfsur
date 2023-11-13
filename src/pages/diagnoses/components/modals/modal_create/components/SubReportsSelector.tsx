import React from "react";
import { CYTOLOGY, HISTOPATHOLOGY, PAP } from "~/constants";
import { BsArrowRightCircle } from "react-icons/all";
import { IReportForm } from "~/interfaces/Report.type";

interface IProps {
  setActive: (active: string) => void;
  setReport: (report: IReportForm) => void;
  report: IReportForm;
}
function SubReportsSelector({ setActive, setReport, report }: IProps) {
  return (
    <>
      <div className="w-full">
        <input type="radio" value="1" id="histo" name="type" className="peer hidden" />
        <label
          id="histo"
          className="m-2 flex cursor-pointer select-none items-center justify-center rounded-3xl bg-indigo-700 p-2 text-center font-semibold text-white hover:bg-indigo-600 peer-checked:border-4 peer-checked:border-indigo-400"
          htmlFor="histo"
          onClick={() => {
            setActive(HISTOPATHOLOGY);
            setReport({ ...report, type: HISTOPATHOLOGY });
          }}
        >
          <span className="w-full">Histopatológico</span>
          {/*<BsArrowRightCircle className="h-5 w-5" />*/}
        </label>
      </div>
      <div className="w-full">
        <input type="radio" value="2" id="cito" name="type" className="peer hidden" />
        <label
          id="cito"
          className="m-2 flex cursor-pointer select-none items-center justify-center rounded-3xl bg-sky-600 p-2 text-center font-semibold text-white hover:bg-sky-500 peer-checked:border-4 peer-checked:border-sky-300"
          htmlFor="cito"
          onClick={() => {
            setReport({ ...report, type: CYTOLOGY });
            setActive(CYTOLOGY);
          }}
        >
          <span className="w-full">Citológico</span>
          {/*<BsArrowRightCircle className="h-5 w-5" />*/}
        </label>
      </div>
      <div className="w-full">
        <input type="radio" value="3" id="bio" name="type" className="peer hidden" />
        <label
          id="bio"
          className="m-2 flex cursor-pointer select-none items-center justify-center rounded-3xl bg-fuchsia-600 p-2 text-center font-semibold text-white hover:bg-fuchsia-500 peer-checked:border-4 peer-checked:border-fuchsia-400"
          htmlFor="bio"
          onClick={() => {
            setReport({ ...report, type: PAP });
            setActive(PAP);
          }}
        >
          <span className="w-full">PAP</span>
          {/*<BsArrowRightCircle className="h-5 w-5" />*/}
        </label>
      </div>
    </>
  );
}
export default SubReportsSelector;
