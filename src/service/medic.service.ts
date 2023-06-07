import axios from "axios";

const getMedics = async () => {
  const response = await axios.get("http://localhost:3000/medics");
  return response.data;
};
