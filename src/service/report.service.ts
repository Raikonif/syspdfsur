import { serviceJson } from "~/service/index";
import Report from "~/interfaces/Report.type";
import {
  CytopathologyReport,
  HistopathologyReport,
  PAPReport,
} from "~/interfaces/SubReports.interface";

export const getReports = async () => {
  const response = await serviceJson.get<Report[]>("/diagnoses");
  return response.data;
};

export const createReport = async (report: Partial<Report>) => {
  const response = await serviceJson.post<Report>("/diagnoses", report);
  return response.data;
};
export const createHistoReport = async (Histopathology: Partial<HistopathologyReport>) => {
  const response = await serviceJson.post<Report>("/diagnoses", Histopathology);
  return response.data;
};

export const createPAPReport = async (PAP: Partial<PAPReport>) => {
  const response = await serviceJson.post<Report>("/diagnoses", PAP);
  return response.data;
};

export const createCytoReport = async (Cytopathology: Partial<CytopathologyReport>) => {
  const response = await serviceJson.post<Report>("/diagnoses", Cytopathology);
  return response.data;
};
