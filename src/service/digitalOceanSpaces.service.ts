import axios, { AxiosResponse } from "axios";
import { VITE_BACKEND_DO_SERVICE } from "~/constants/service/service.constants";

const uploadToDOSpaces = async (formData: FormData): Promise<AxiosResponse> => {
  try {
    return await axios.post(`${VITE_BACKEND_DO_SERVICE}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Error uploading to DigitalOcean Spaces:", error);
    throw error;
  }
};

export { uploadToDOSpaces };
