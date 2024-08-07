import { OpCaseSlide, OpSlidePreview } from "~/interfaces/Case.interface";
import convertToWebp from "~/helpers/convertToWebp";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import { createSlideCase } from "~/service/supabase/slides.service";

async function processAndUploadSlides(listSlidesPreview: OpSlidePreview[], caseId: string) {
  let tempCaseSlideData: OpCaseSlide[] = [];

  async function verifyUrls(
    imageFullQuality: string,
    imageLowQuality: string,
    slide: OpSlidePreview,
  ) {
    if (imageFullQuality && imageLowQuality) {
      tempCaseSlideData = [
        ...tempCaseSlideData,
        {
          case_id: caseId,
          image_url: imageFullQuality,
          image_url_webp: imageLowQuality,
          title: slide.title,
          description: slide.description,
        },
      ];
      console.log("case slide updated", tempCaseSlideData);
    } else {
      console.log("Error uploading image:", imageFullQuality);
      console.log("Error uploading image:", imageLowQuality);
    }
  }

  await Promise.all(
    listSlidesPreview.map(async (slide) => {
      try {
        const webpFile = await convertToWebp(slide.image_file);
        const imageFullQuality = await uploadDigitalOceanImg(slide.image_file);
        const imageLowQuality = await uploadDigitalOceanImg(webpFile);
        await verifyUrls(imageFullQuality.data.file_url, imageLowQuality.data.file_url, slide);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }),
  );
  const { data, error } = await createSlideCase(tempCaseSlideData);
  return { data, error };
}

export default processAndUploadSlides;
