import { serviceJson } from "~/service/index";
import Medic from "~/interfaces/Medic.type";

export const getMedics = async (): Promise<Medic[]> => {
  const response = await serviceJson.get("/medics");
  return response.data;
};

export const createMedic = async (medic: Medic) => {
  const response = await serviceJson.post("/medics", medic);
  return response.data;
};
