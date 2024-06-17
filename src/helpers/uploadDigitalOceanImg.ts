import {
  getGeneratedPresignedUrl,
  uploadDigitalOceanImg,
} from "~/service/digitalOceanSpaces.service";

async function UploadDigitalOceanImg(bucket: string, folder: string, name: string, file: File) {
  let publicUrl = undefined;
  const presignedUrl = await getGeneratedPresignedUrl(bucket, `${folder}/${name}`);
  console.log(presignedUrl.data, presignedUrl.request.status);
  if (presignedUrl.data && presignedUrl.request.status === 200) {
    const digitalImg = await uploadDigitalOceanImg(presignedUrl.data, file);
    console.log(digitalImg.data, digitalImg.status);
    if (digitalImg.data && digitalImg.status === 200) {
      publicUrl = presignedUrl;
    } else {
      console.error("Error al subir la imagen");
    }
    return { publicUrl };
  }
}

export default UploadDigitalOceanImg;
