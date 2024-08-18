import React, { ReactElement, useContext } from "react";
import { useTranslation } from "react-i18next";
import GenericModal from "~/components/GenericModal";
import AdminContext from "~/pages/admin/context/AdminContext";
import { deleteCase } from "~/service/supabase/cases.service";
import toast from "react-hot-toast";
import { deleteSlideCase, getSlideFromCase } from "~/service/supabase/slides.service";
import { deleteImageFromDOSpaces } from "~/service/digitalOceanSpaces.service";
import ProgressCircle from "~/components/ProgressCircle";

function ModalDelete(): ReactElement {
  const { isOpenDelete, onCloseDelete, onCloseCase } = useContext(AdminContext);
  const { t } = useTranslation();
  const {
    nameDelete,
    setSelectedKey,
    currentId,
    currentSlideInfo,
    loading,
    setLoading,
    loadingAttributes,
    setLoadingAttributes,
    getCasesData,
    getSlidesData,
  } = useContext(AdminContext);

  const handleDelete = async () => {
    setLoading(true);
    if (nameDelete === "Caso") {
      setLoadingAttributes({
        message: "Eliminando caso",
        color: "danger",
      });
      const getSlides = await getSlideFromCase(currentId);
      console.log("getSlides", getSlides);
      if (getSlides.data.length > 0) {
        getSlides.data.map(async (slide) => {
          const nameImg = slide.image_url.split("/").pop();
          const nameImgWebp = slide.image_url_webp.split("/").pop();
          const responseImg = await deleteImageFromDOSpaces(nameImg);
          console.log("responseImg", responseImg);
          const responseWebp = await deleteImageFromDOSpaces(nameImgWebp);
          console.log("responseWebp", responseWebp);
        });
        getSlides.data.map(async (slide) => await deleteSlideCase(slide.id));
        toast.error("Slides Eliminados");
      }
      const { data, error } = await deleteCase(currentId);
      if (data) {
        toast.error("Caso eliminado");
      } else {
        toast.error("Error al eliminar el caso");
      }
      await getCasesData();
      setLoading(false);
      onCloseCase();
    }
    if (nameDelete === "Slide") {
      setLoadingAttributes({
        message: "Eliminando slide",
        color: "danger",
      });
      const nameImg = currentSlideInfo.image_url.split("/").pop();
      const nameImgWebp = currentSlideInfo.image_url_webp.split("/").pop();
      const responseImg = await deleteImageFromDOSpaces(nameImg);
      console.log("responseImg", responseImg);
      const responseWebp = await deleteImageFromDOSpaces(nameImgWebp);
      console.log("responseWebp", responseWebp);
      const { data, error } = await deleteSlideCase(currentSlideInfo.id);
      if (data) {
        toast.error("Slide eliminado");
      } else {
        toast.error("Error al eliminar el slide");
      }
      await getSlidesData();
      setLoading(false);
      onCloseCase();
    }
  };
  const handleClose = () => {
    onCloseDelete();
    setSelectedKey("see");
  };

  return (
    <GenericModal
      onClose={handleClose}
      isOpen={isOpenDelete}
      title={`Borrar ${nameDelete}`}
      onClickConfirm={async () => await handleDelete()}
    >
      <div className="m-auto w-64 rounded-2xl p-4">
        {loading && (
          <ProgressCircle text={loadingAttributes.message} color={loadingAttributes.color} />
        )}
        <div className="h-full w-full text-center">
          <div className="flex h-full flex-col justify-between">
            <svg
              width="40"
              height="40"
              className="m-auto mt-4 h-12 w-12 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
            </svg>
            <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">{nameDelete}</p>
            <p className="px-6 py-2 text-sm text-gray-600 dark:text-gray-400">
              {`Estas Seguro de querer borrar este ${nameDelete}?`}
            </p>
          </div>
        </div>
      </div>
    </GenericModal>
  );
}

export default ModalDelete;
