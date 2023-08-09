import React, { ReactElement } from "react";
import { IHistopathologyReportForm } from "~/interfaces/SubReports.interface";

interface IProps {
  setReport: (histoReport: IHistopathologyReportForm) => void;
  report: IHistopathologyReportForm;
}
function Histopathology({ setReport, report }: IProps): ReactElement {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex w-full">
        <input
          type="number"
          value={report.slides === 0 ? "" : report.slides}
          id="histo_slides"
          name="histo_slides"
          placeholder="Láminas"
          aria-autocomplete="none"
          onChange={(e) => setReport({ ...report, slides: Number(e.target.value) })}
          className="m-1 mt-2 w-full items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
        <input
          type="number"
          value={report.blocks === 0 ? "" : report.blocks}
          id="histo_blocks"
          name="histo_blocks"
          placeholder="Bloques"
          aria-autocomplete="none"
          onChange={(e) => setReport({ ...report, blocks: Number(e.target.value) })}
          className="m-1 mt-2 w-full items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
      </div>
      <div className="flex h-full w-full">
        <textarea
          value={report.macroscopy}
          id="histo_macroscopy"
          name="histo_macroscopy"
          placeholder="Macroscopía"
          aria-autocomplete="none"
          onChange={(e) => setReport({ ...report, macroscopy: e.target.value })}
          className="m-1 mt-2 w-1/3 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
        <textarea
          value={report.microscopy}
          id="histo_microscopy"
          name="histo_microscopy"
          placeholder="Microscopía"
          aria-autocomplete="none"
          onChange={(e) => setReport({ ...report, microscopy: e.target.value })}
          className="m-1 mt-2 w-1/3 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
        <textarea
          value={report.conclusion}
          id="histo_conclusion"
          name="histo_conclusion"
          placeholder="Conclusión"
          aria-autocomplete="none"
          onChange={(e) => setReport({ ...report, conclusion: e.target.value })}
          className="m-1 mt-2 w-1/3 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
        />
      </div>
    </div>
  );
}

export default Histopathology;
