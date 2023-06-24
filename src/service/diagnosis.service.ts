import { serviceJson } from "~/service/index";
import Diagnosis from "~/interfaces/Diagnosis.type";

export const getDiagnoses = async () => {
  const response = await serviceJson.get<Diagnosis[]>("/diagnoses");
  return response.data;
};