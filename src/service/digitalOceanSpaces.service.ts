import axios from "axios";
import { VITE_BACKEND_GENERATE_PRESIGNED_URL_SPACES } from "~/constants/service/service.constants";

const getGeneratedPresignedUrl = async (bucket_spaces: string, key: string): Promise<string> => {
  return await axios.get(VITE_BACKEND_GENERATE_PRESIGNED_URL_SPACES, {
    params: { bucket_name: bucket_spaces, key: key },
  });
};

const uploadDigitalOceanImg = async (fileUrl: string, file: File) => {
  return await axios.put(fileUrl, file, {
    headers: {
      "Content-Type": file.type,
      "x-amz-acl": "public-read",
    },
  });
};

export { getGeneratedPresignedUrl, uploadDigitalOceanImg };
