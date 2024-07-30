import { v4 as uuidv4 } from "uuid";
import supabase from "~/service/supabase/supabase.service";

const uploadImage = async (
  e: HTMLInputElement,
  bucketDestination = "admin-blog-slides",
  folder = "slides",
) => {
  let publicUrl = undefined;
  const randomName = uuidv4();
  if (!e.files) return;
  const file = e.files[0];
  const { data, error } = await supabase.storage
    .from(bucketDestination)
    .upload(`${folder}/${randomName}`, file, { contentType: "image/*" });

  if (data) {
    console.log("upload response", data);
    const { data: data_url } = supabase.storage
      .from(bucketDestination)
      .getPublicUrl(`${folder}/${randomName}`);
    console.log(data_url.publicUrl);
    publicUrl = data_url.publicUrl;
  } else {
    console.error("Error al subir la imagen", error);
  }
  return { publicUrl, error };
};

export default uploadImage;
