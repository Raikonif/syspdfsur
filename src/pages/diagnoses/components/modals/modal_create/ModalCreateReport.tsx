import React, { ReactElement, useEffect, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { BsArrowRightCircle } from "react-icons/all";
import Histopathology from "~/pages/diagnoses/components/modals/modal_create/subsections/Histopathology";
import PatientSelect from "~/pages/diagnoses/components/modals/modal_create/components/PatientSelect";
import { getPatients } from "~/service/patient.service";
import Patient from "~/interfaces/Patient.type";
import useGetData from "~/hooks/useGetData";
import MedicSelect from "~/pages/diagnoses/components/modals/modal_create/components/MedicSelect";
import { getMedics } from "~/service/medic.service";
import Medic from "~/interfaces/Medic.type";
import Datepicker from "react-tailwindcss-datepicker";
import { IReportForm, IsValidReport, Report } from "~/interfaces/Report.type";
import {
  HistopathologyReport,
  IHistopathologyReportForm,
  IsValidHistopathologyReport,
} from "~/interfaces/SubReports.interface";
import { CYTOLOGY, HISTOPATHOLOGY, PAP } from "~/constants";
import { Dates } from "~/interfaces/Dates.type";
import { createHistoReport, getLastReport } from "~/service/report.service";
import { createReport } from "~/service/report.service";
import useValidation from "~/hooks/useValidation";
import useValidateReport from "~/hooks/useValidateReport";
import ReportDatetimepickers from "./components/ReportDatetimepickers";
import useCleanOptionalKeys from "~/hooks/useCleanOptionalKeys";
import InputFields from "~/pages/diagnoses/components/modals/modal_create/components/InputFields";
import SubReportsSelector from "~/pages/diagnoses/components/modals/modal_create/components/SubReportsSelector";
import Cytology from "~/pages/diagnoses/components/modals/modal_create/subsections/Cytology";
import Biopsy from "~/pages/diagnoses/components/modals/modal_create/subsections/Biopsy";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreateReport({ onClose, refModal }: IProps): ReactElement {
  const [active, setActive] = useState<string>(HISTOPATHOLOGY);
  const { data: patients } = useGetData<Patient[]>({ dataToFetch: getPatients });
  const { data: medics } = useGetData<Medic[]>({ dataToFetch: getMedics });
  const [switchButton, setSwitchButton] = useState<boolean>(false);
  const [sampleDate, setSampleDate] = useState<Dates>({
    startDate: null,
    endDate: null,
  });
  const currentDate = new Date();
  const [sampleReception, setSampleReception] = useState<Dates>({
    startDate: null,
    endDate: null,
  });
  const [reportElaboration, setReportElaboration] = useState<Dates>({
    startDate: `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`,

    endDate: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
  });
  const [report, setReport] = useState<IReportForm>({
    medic_id: 0,
    patient_id: 0,
    type: HISTOPATHOLOGY,
    service: "",
    clinical_diagnosis: "",
    study_code: "",
    sample_date: null,
    reception_date: null,
    report_date: reportElaboration.startDate as Date,
  });

  const [histoReport, setHistoReport] = useState<IHistopathologyReportForm>({
    report_id: 1,
    slides: 0,
    blocks: 0,
    macroscopy: "",
    microscopy: "",
    conclusion: "",
  });

  const validateSubReport = (report: Partial<HistopathologyReport>) => {
    for (const value of Object.values(report)) {
      if (report.slides === 0 || value === null || value === "") {
        return false;
      }
    }
    return true;
  };

  const handleValueChange = (sampleDate: any) => {
    console.log("sample:", sampleDate);
    setSampleDate(sampleDate);
    const updatedSampleDate = sampleDate.startDate !== null ? sampleDate.startDate : undefined;
    setReport({ ...report, sample_date: updatedSampleDate });
  };

  const handleReceptionChange = (receptionDate: any) => {
    console.log("reception:", receptionDate);
    setSampleReception(receptionDate);
    const updatedReceptionDate =
      receptionDate.startDate !== null ? receptionDate.startDate : undefined;
    setReport({ ...report, reception_date: updatedReceptionDate });
  };

  const handleReportChange = (reportDate: any) => {
    console.log("report:", reportDate);
    setReportElaboration(reportDate);
    const updatedReportDate = reportDate.startDate !== null ? reportDate.startDate : undefined;
    setReport({ ...report, report_date: updatedReportDate });
  };

  // TODO: Create a function to validate the report
  const handleReport = async () => {
    try {
      const reportData = await createReport(report as Report);
      const lastReportID = await getLastReport();
      const subReport = await createHistoReport({ ...histoReport, report_id: lastReportID });
      console.log("submited report: ", reportData);
      console.log("submited subreport: ", subReport);
    } catch (error) {
      console.log("error handling the report", error);
    }
  };
  const histoReportCleaned = useCleanOptionalKeys(histoReport);
  const is_valid_report = useValidateReport(report);
  const is_valid_subreport = useValidateReport(histoReportCleaned);

  useEffect(() => {
    console.log("report:", reportElaboration);
    console.log("sample:", sampleDate);
    console.log("reception:", sampleReception);
    console.log("active", active);
  }, []);

  useEffect(() => {
    if (is_valid_report && is_valid_subreport) {
      setSwitchButton(true);
    } else {
      setSwitchButton(false);
    }
    console.log("valid report", is_valid_report);
    console.log("valid subreport", is_valid_subreport);
  }, [report, histoReport]);

  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={() => onClose(false)} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Crear Reporte</h1>
          <div className="flex w-full flex-col p-1">
            <div className="flex p-1">
              <ReportDatetimepickers
                valueSampleDate={sampleDate}
                valueReceptionDate={sampleReception}
                valueElaborationDate={reportElaboration}
                onChangeSampleDate={handleValueChange}
                onChangeReceptionDate={handleReceptionChange}
                onChangeElaborationDate={handleReportChange}
              />
            </div>
            <div className="flex justify-between px-1">
              <div className="mx-1 flex w-1/2">
                <PatientSelect data={patients} option={setReport} report={report} />
              </div>
              <div className=" mx-1 flex w-1/2">
                <MedicSelect data={medics} option={setReport} report={report} />
              </div>
            </div>
            <div className="flex justify-between p-1">
              <InputFields report={report} setReport={setReport} />
            </div>

            <div className="flex w-full items-center">
              <SubReportsSelector setReport={setReport} report={report} setActive={setActive} />
            </div>
          </div>
          {active === HISTOPATHOLOGY && (
            <Histopathology setReport={setHistoReport} report={histoReport} />
          )}
          {active === CYTOLOGY && <Cytology />}
          {active === PAP && <Biopsy />}
          <div className="w-full">
            <div className="flex items-end justify-end">
              <button
                onClick={() => {
                  handleReport().then(() => onClose(false));
                }}
                className={`${
                  switchButton ? "bg-fuchsia-600" : "bg-fuchsia-400"
                } m-1 rounded-lg  p-2 text-white`}
                disabled={!switchButton}
              >
                Guardar Reporte y Generar PDF
              </button>
              <button
                onClick={() => {
                  handleReport().then(() => onClose(false));
                }}
                className={`${
                  switchButton ? "bg-indigo-600" : "bg-indigo-400"
                } m-1 rounded-lg  p-2 text-white`}
                disabled={!switchButton}
              >
                Guardar Reporte
              </button>
            </div>
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalCreateReport;
