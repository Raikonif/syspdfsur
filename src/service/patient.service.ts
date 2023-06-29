import { serviceJson } from "~/service/index";
import Patient from "~/interfaces/Patient.type";

export const getPatients = async () => {
  const response = await serviceJson.get<Patient[]>("/patients");
  return response.data;
};
