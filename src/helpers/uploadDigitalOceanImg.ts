import { uploadDigitalOceanImg } from "~/service/digitalOceanSpaces.service";
import { v4 as uuidv4 } from "uuid";

async function UploadDigitalOceanImg(file: any) {
  const randomName = uuidv4();
  const formData = new FormData();
  formData.append("file", file, randomName);
  return await uploadDigitalOceanImg(formData);
}

export default UploadDigitalOceanImg;
