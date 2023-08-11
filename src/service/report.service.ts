import { serviceJson } from "~/service/index";
import { Report } from "~/interfaces/Report.type";
import {
  CytopathologyReport,
  HistopathologyReport,
  PAPReport,
} from "~/interfaces/SubReports.interface";

const getReports = async () => {
  const response = await serviceJson.get<Report[]>("/reports");
  return response.data;
};

const createReport = async (report: Partial<Report>) => {
  const response = await serviceJson.post<Report>("/reports", report);
  return response.data;
};
const createHistoReport = async (Histopathology: Partial<HistopathologyReport>) => {
  const response = await serviceJson.post<Report>("/reports", Histopathology);
  return response.data;
};

const createPAPReport = async (PAP: Partial<PAPReport>) => {
  const response = await serviceJson.post<Report>("/reports", PAP);
  return response.data;
};

const createCytoReport = async (Cytopathology: Partial<CytopathologyReport>) => {
  const response = await serviceJson.post<Report>("/reports", Cytopathology);
  return response.data;
};

export {
  getReports,
  createReport,
  createHistoReport,
  createPAPReport,
  createCytoReport,
}