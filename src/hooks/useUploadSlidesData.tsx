import { useContext, useEffect, useState } from "react";
import { OpSlidePreview } from "~/interfaces/Case.interface";
import AdminContext from "~/pages/admin/context/AdminContext";
import convertToWebp from "~/helpers/convertToWebp";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import { createSlideCase } from "~/service/supabase/slides.service";
import toast from "react-hot-toast";

interface Props {
  slide: OpSlidePreview;
}

async function useUploadSlidesData({ slide }: Props) {
  const [response, setResponse] = useState<{ data: any[]; error: any }>({
    data: null,
    error: null,
  });
  const [imagesUrl, setImagesUrl] = useState({ img_url: "", img_url_webp: "" });

  const { caseSlideData, setCaseSlideData, listSlidesPreview } = useContext(AdminContext);
  const handleFillSlideData = async (slide: OpSlidePreview) => {
    try {
      const webpFile = await convertToWebp(slide.image_file);
      const imageFullQuality = await uploadDigitalOceanImg(slide.image_file);
      const imageLowQuality = await uploadDigitalOceanImg(webpFile);
      setImagesUrl({
        img_url: imageFullQuality.data.image_url,
        img_url_webp: imageLowQuality.data.image_url_webp,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  // const uploadSlides = async () => {
  //   await Promise.all(listSlidesPreview.map((slide) => handleFillSlideData(slide)));
  //   const { data, error } = await createSlideCase(caseSlideData);
  //   if (data) {
  //     toast.success("Slides creados");
  //   } else {
  //     toast.error("Error al crear los slides");
  //   }
  //   return { data, error };
  // };

  useEffect(() => {
    // uploadSlides().then((res) => setResponse({ data: res.data, error: res.error }));
    handleFillSlideData(slide);
    if (imagesUrl.img_url !== "" && imagesUrl.img_url_webp !== "") {
      setCaseSlideData([
        ...caseSlideData,
        {
          case_id: "80bb97d1-5156-44ec-aedc-801ad7ea65fa",
          image_url: imagesUrl.img_url,
          image_url_webp: imagesUrl.img_url_webp,
          title: slide.title,
          description: slide.description,
        },
      ]);
    }
  }, [imagesUrl]);
}

export default useUploadSlidesData;
