import axios from "axios";

export const getDiagnoses = async () => {
  const response = await axios.get("http://localhost:3000/diagnoses");
  return response.data;
};
