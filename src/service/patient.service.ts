import axios from "axios";

export const getPatients = async () => {
  const response = await axios.get("http://localhost:3000/patients");
  return response.data;
};
