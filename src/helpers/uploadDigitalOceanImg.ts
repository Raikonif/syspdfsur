import { uploadToDOSpaces } from "~/service/digitalOceanSpaces.service";
import { v4 as uuidv4 } from "uuid";

async function uploadDigitalOceanImg(file: File) {
  const randomName = uuidv4();
  const formData = new FormData();
  formData.append("file", file, randomName);
  try {
    return await uploadToDOSpaces(formData);
  } catch (error) {
    console.error("Error in uploadDigitalOceanImg function:", error);
    throw error;
  }
}

export default uploadDigitalOceanImg;
