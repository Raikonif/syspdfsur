import { serviceJson } from "~/service/index";

export const getPatients = async () => {
  const response = await serviceJson.get("/patients");
  return response.data;
};
