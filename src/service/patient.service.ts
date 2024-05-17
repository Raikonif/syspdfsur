import { serviceJson } from "~/service/index";
import Patient from "~/interfaces/Patient.type";
import { AxiosResponse } from "axios";

export const getPatients2 = async (): Promise<Patient[]> => {
  const response = await serviceJson.get<Patient[]>("/patients");
  return response.data;
};

export const getPatients = async (): Promise<AxiosResponse<Patient[]>> => {
  return await serviceJson.get<Patient[]>("/patients");
};

export const createPatient = async (patient: Patient) => {
  const response = await serviceJson.post<Patient>("/patients", patient);
  return response.data;
};
