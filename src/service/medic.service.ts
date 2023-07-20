import { serviceJson } from "~/service/index";
import Medic from "~/interfaces/Medic.type";

export const getMedics = async (): Promise<Medic[]> => {
  const response = await serviceJson.get("/medics");
  return response.data;
};
