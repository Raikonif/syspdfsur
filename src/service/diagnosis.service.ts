import { serviceJson } from "~/service/index";
import Report from "~/interfaces/Report.type";

export const getDiagnoses = async () => {
  const response = await serviceJson.get<Report[]>("/diagnoses");
  return response.data;
};

export const createDiagonis = async (diagnosis: Report) => {
  const response = await serviceJson.post<Report>("/diagnoses", diagnosis);
  return response.data;
};
