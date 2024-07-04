import axios, { AxiosResponse } from "axios";
import { VITE_BACKEND_DO_SERVICE } from "~/constants/service/service.constants";

const uploadDigitalOceanImg = async (formData: any, file: File): Promise<AxiosResponse> => {
  return await axios.post(`${VITE_BACKEND_DO_SERVICE}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export { uploadDigitalOceanImg };
