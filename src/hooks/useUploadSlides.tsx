import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useContext, useEffect, useState } from "react";
import { OpSlidePreview } from "~/interfaces/Case.interface";
import { createSlideCase } from "~/service/supabase/slides.service";
import toast from "react-hot-toast";
import convertToWebp from "~/helpers/convertToWebp";

async function useUploadSlides() {
  const [response, setResponse] = useState<{ data: object; error: object }>({
    data: null,
    error: null,
  });
  const { caseSlideData, setCaseSlideData, listSlidesPreview } = useContext(AdminContext);
  const handleFillSlideData = async (slide: OpSlidePreview) => {
    try {
      const webpFile = await convertToWebp(slide.image_file);
      const imageFullQuality = await uploadDigitalOceanImg(slide.image_file);
      const imageLowQuality = await uploadDigitalOceanImg(webpFile);
      console.log("response", imageFullQuality, imageLowQuality);
      setCaseSlideData([
        ...caseSlideData,
        {
          case_id: "80bb97d1-5156-44ec-aedc-801ad7ea65fa",
          image_url: imageFullQuality.data.image_url,
          image_url_webp: imageLowQuality.data.image_url_webp,
          title: slide.title,
          description: slide.description,
        },
      ]);
      console.log("case slide uploaded", caseSlideData);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const uploadSlides = async () => {
    await Promise.all(listSlidesPreview.map((slide) => handleFillSlideData(slide)));
    const { data, error } = await createSlideCase(caseSlideData);
    if (data) {
      toast.success("Slides creados");
    } else {
      toast.error("Error al crear los slides");
    }
    return { data, error };
  };
  useEffect(() => {
    if (listSlidesPreview.length > 0) {
      uploadSlides().then((res) => setResponse(res));
    }
  }, [caseSlideData, listSlidesPreview]);
  return { data: response.data, error: response.error };
}

export default useUploadSlides;
