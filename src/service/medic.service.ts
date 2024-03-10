import { serviceAPI, serviceJson } from "~/service/index";
import Medic from "~/interfaces/Medic.type";
import { AxiosResponse } from "axios";

export const getMedics2 = async (): Promise<Medic[]> => {
  const response = await serviceJson.get("/medics");
  return response.data;
};

export const getMedics = async (): Promise<AxiosResponse<Medic[]>> => {
  return await serviceAPI.get("/api/v1/medics");
};

export const createMedic = async (medic: Medic) => {
  const response = await serviceJson.post("/medics", medic);
  return response.data;
};
