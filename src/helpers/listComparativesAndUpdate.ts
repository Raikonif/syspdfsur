import { OpSlidePreview } from "~/interfaces/Case.interface";
import { createSlideCase, updateSlideCase } from "~/service/supabase/slides.service";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import convertToWebp from "~/helpers/convertToWebp";
import { deleteImageFromDOSpaces } from "~/service/digitalOceanSpaces.service";
import processAndUploadSlides from "~/helpers/processAndUploadSlides";

interface Props {
  originalList: OpSlidePreview[];
  comparationList: OpSlidePreview[];
  caseId: string;
}

function areTheSameAttributesAndValues(obj1: OpSlidePreview, obj2: OpSlidePreview) {
  return Object.keys(obj1).every(
    (key) => obj1[key as keyof OpSlidePreview] === obj2[key as keyof OpSlidePreview],
  );
}

async function listComparativesAndUpdate({ originalList, comparationList, caseId }: Props) {
  if (originalList.length > 0 && comparationList.length === 0) {
    await processAndUploadSlides(originalList, caseId);
  }
  for (const slide of originalList) {
    if (slide.id === "" || slide.id === undefined) {
      const webpImg = await convertToWebp(slide.image_file);
      const imgURL = await uploadDigitalOceanImg(slide.image_file);
      const webpURL = await uploadDigitalOceanImg(webpImg);
      await createSlideCase({
        case_id: caseId,
        title: slide.title,
        description: slide.description,
        image_url: imgURL.data.file_url,
        image_url_webp: webpURL.data.file_url,
      });
      return;
    }
    for (const comparationSlide of comparationList) {
      if (comparationSlide.id === slide.id) {
        if (!areTheSameAttributesAndValues(slide, comparationSlide)) {
          if (
            comparationSlide.image_url === slide.image_url &&
            comparationSlide.image_url_webp === slide.image_url_webp &&
            (comparationSlide.title !== slide.title ||
              comparationSlide.description !== slide.description)
          ) {
            await updateSlideCase(comparationSlide.id, {
              title: slide.title,
              description: slide.description,
            });
          } else if (comparationSlide.image_url !== slide.image_url) {
            const webpImg = await convertToWebp(slide.image_file);
            const imgURL = await uploadDigitalOceanImg(slide.image_file);
            const webpURL = await uploadDigitalOceanImg(webpImg);
            const imgURLToDelete = comparationSlide.image_url.split("/").pop();
            const webpURLToDelete = comparationSlide.image_url_webp.split("/").pop();
            await deleteImageFromDOSpaces(imgURLToDelete);
            await deleteImageFromDOSpaces(webpURLToDelete);
            await updateSlideCase(comparationSlide.id, {
              image_url: imgURL.data.file_url,
              image_url_webp: webpURL.data.file_url,
              title: slide.title,
              description: slide.description,
            });
          }
        }
      }
    }
  }
}

export default listComparativesAndUpdate;