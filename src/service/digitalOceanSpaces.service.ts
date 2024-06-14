import axios from "axios";
import { VITE_BACKEND_GENERATE_PRESIGNED_URL_SPACES } from "~/constants/service/service.constants";

const getGeneratedPresignedUrl = async (bucket_spaces: string, key: string): Promise<string> => {
  const { data } = await axios.get(VITE_BACKEND_GENERATE_PRESIGNED_URL_SPACES, {
    params: { bucket_name: bucket_spaces, key: key },
  });
  return data.url;
};

export { getGeneratedPresignedUrl };
