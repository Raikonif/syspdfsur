import { serviceJson } from "~/service/index";
import { Report } from "~/interfaces/Report.type";
import {
  CytopathologyReport,
  HistopathologyReport,
  PAPReport,
} from "~/interfaces/SubReports.interface";

export const getReports = async () => {
  const response = await serviceJson.get<Report[]>("/reports");
  return response.data;
};
export const createReport = async (report: Partial<Report>) => {
  const response = await serviceJson.post<Report>("/reports", report);
  return response.data;
};

export const getLastReport = async () => {
  const response = await serviceJson.get<Report[]>("/reports?_sort=id&_order=desc&_limit=1");
  return response.data[0].id;
};
export const createHistoReport = async (Histopathology: Partial<HistopathologyReport>) => {
  const response = await serviceJson.post<Report>("/histo_reports", Histopathology);
  return response.data;
};

export const createPAPReport = async (PAP: Partial<PAPReport>) => {
  const response = await serviceJson.post<Report>("/reports", PAP);
  return response.data;
};

export const createCytoReport = async (Cytopathology: Partial<CytopathologyReport>) => {
  const response = await serviceJson.post<Report>("/reports", Cytopathology);
  return response.data;
};
