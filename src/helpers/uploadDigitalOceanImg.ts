import {
  getGeneratedPresignedUrl,
  uploadDigitalOceanImg,
} from "~/service/digitalOceanSpaces.service";

async function UploadDigitalOceanImg(bucket: string, folder: string, name: string, file: File) {
  let publicUrl = undefined;
  const presignedUrl = await getGeneratedPresignedUrl(bucket, `${folder}/${name}`);
  if (presignedUrl) {
    const { data } = await uploadDigitalOceanImg(presignedUrl, file);
    if (data) {
      publicUrl = presignedUrl;
    } else {
      console.error("Error al subir la imagen");
    }
    return { publicUrl };
  }
}

export default UploadDigitalOceanImg;
