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
import CustomDatepicker from "./components/CustomDatepicker";
import useCleanOptional from "~/hooks/useCleanOptional";

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
  const is_valid_report = useValidateReport(report);
  const is_valid_subreport = useValidateReport(histoReport);

  useEffect(() => {
    console.log("report:", reportElaboration);
    console.log("sample:", sampleDate);
    console.log("reception:", sampleReception);
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
              <CustomDatepicker
                value={sampleDate}
                onChange={handleValueChange}
                placeholder={"Ingrese una Fecha"}
                label={"Toma de Muestra"}
              />
              <CustomDatepicker
                value={sampleReception}
                onChange={handleReceptionChange}
                placeholder={"Ingrese una Fecha"}
                label={"Recepcion de Muestra"}
              />
              <CustomDatepicker
                value={reportElaboration}
                onChange={handleReportChange}
                placeholder={"Fecha de Elaboracion de Informe"}
                label={"Elaboracion de Informe"}
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
              <input
                type="text"
                value={report.clinical_diagnosis}
                id="cli_diagnosis"
                name="cli_diagnosis"
                aria-autocomplete="none"
                placeholder="Diagnostico Clinico"
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
                  placeholder="Servicio/Centro"
                  onChange={(e) => setReport({ ...report, service: e.target.value })}
                  className="m-1 mt-2 w-1/2 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
                <input
                  type="text"
                  value={report.study_code}
                  id="study_code"
                  name="study_code"
                  aria-autocomplete="none"
                  placeholder="Numero de Estudio"
                  onChange={(e) => setReport({ ...report, study_code: e.target.value })}
                  className="m-1 mt-2 w-1/2 items-center rounded-lg bg-indigo-200 p-2 placeholder:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div className="flex w-full items-center">
              <div className="w-full">
                <input type="radio" value="1" id="histo" name="type" className="peer hidden" />
                <label
                  id="histo"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-indigo-700 p-2 text-center font-semibold text-white hover:bg-indigo-600 peer-checked:border-4 peer-checked:border-indigo-400"
                  htmlFor="histo"
                  onClick={() => {
                    setActive(HISTOPATHOLOGY);
                    setReport({ ...report, type: HISTOPATHOLOGY });
                  }}
                >
                  <span className="w-full">Histopatológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="2" id="cito" name="type" className="peer hidden" />
                <label
                  id="cito"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-lime-600 p-2 text-center font-semibold text-white hover:bg-lime-500 peer-checked:border-4 peer-checked:border-lime-300"
                  htmlFor="cito"
                  onClick={() => {
                    setReport({ ...report, type: CYTOLOGY });
                    setActive(CYTOLOGY);
                  }}
                >
                  <span className="w-full">Citológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="3" id="bio" name="type" className="peer hidden" />
                <label
                  id="bio"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-pink-700 p-2 text-center font-semibold text-white hover:bg-pink-600 peer-checked:border-4 peer-checked:border-pink-400"
                  htmlFor="bio"
                  onClick={() => {
                    setReport({ ...report, type: PAP });
                    setActive(PAP);
                  }}
                >
                  <span className="w-full">PAP</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
            </div>
          </div>
          {active === HISTOPATHOLOGY && (
            <Histopathology setReport={setHistoReport} report={histoReport} />
          )}
          {active === CYTOLOGY && (
            <div className="h-full w-full items-center justify-center bg-slate-600">
              <h1>Citologia</h1>
            </div>
          )}
          {active === PAP && (
            <div className="h-full w-full items-center justify-center bg-slate-600">Biopsia</div>
          )}
          <button
            onClick={() => {
              handleReport();
            }}
            className={`${
              switchButton ? "bg-indigo-600" : "bg-indigo-400"
            } m-1 rounded-lg  p-2 text-white`}
            disabled={!switchButton}
          >
            Guardar Reporte
          </button>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalCreateReport;
