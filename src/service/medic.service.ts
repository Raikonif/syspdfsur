import { serviceJson } from "~/service/index";

export const getMedics = async () => {
  const response = await serviceJson.get("/medics");
  return response.data;
};
