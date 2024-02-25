import React from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import ImageAndDescription from "~/pages/articles/components/modals/ImageAndDescription";
import { useTranslation } from "react-i18next";
import FlickitySliderArticle from "~/pages/articles/components/FlickitySliderArticle";

interface Props {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
  onEdit: (isEditing: boolean) => void;
  edit: boolean;
}
function ModalEditArticle({ onClose, refModal, onEdit, edit }: Props) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal
        onClose={() => onClose(false)}
        refModal={refModal}
        customWidth={"w-4/5 lg:w-fit"}
        customHeight={"h-10/12 lg:h-fit"}
      >
        <form className="flex w-full max-w-sm space-x-3 md:max-w-xl lg:max-w-sm">
          <div className="m-auto mt-10 w-full max-w-2xl rounded-lg bg-white px-5 py-10 dark:bg-gray-800">
            <h1 className="mb-6 text-center text-3xl font-light text-gray-800 dark:text-white">
              {edit ? t("EDIT_ARTICLE") : t("ARTICLE_VIEW")}
            </h1>
            <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="article-form-title"
                    className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="article-form-type"
                    className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Type"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <select
                    id="article-author"
                    className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Author"
                  />
                </div>
              </div>
              <FlickitySliderArticle />
              {/*<ImageAndDescription*/}
              {/*  getImage={"https://www.w3schools.com/w3images/lights.jpg"}*/}
              {/*  getDescription={"DESCRIPTION AS EXAMPLE"}*/}
              {/*/>*/}
              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className="w-full rounded-lg  bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </GeneralModal>
    </div>
  );
}

export default ModalEditArticle;
