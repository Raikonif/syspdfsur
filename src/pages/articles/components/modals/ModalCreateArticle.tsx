import React, { ReactElement, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { useTranslation } from "react-i18next";
import MyDropZone from "~/components/MyDropZone";
import ImageAndDescription from "~/pages/articles/components/modals/ImageAndDescription";
import ArticleSliderSwiper from "~/pages/articles/components/ArticleSliderSwiper";
import SelectAuthor from "~/pages/articles/components/modals/SelectAuthor";
import { Author, IArticle } from "~/interfaces/Article.interface";

interface IProps {
  onClose: (onClose: boolean) => void;
  onEdit: (onEdit: boolean) => void;
  create: boolean;
  edit: boolean;
  show: boolean;
  authors: any;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreateArticle({
  onClose,
  refModal,
  create,
  edit,
  show,
  onEdit,
  authors,
}: IProps): ReactElement {
  const [createArticle, setCreateArticle] = useState<IArticle>({
    id: 0,
    title: "",
    type: "",
    author: {} as Author,
    article_slides: [],
  } as IArticle);

  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(createArticle);
  };
  const slides = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis. Lorem Ipsum",
      image: "https://www.w3schools.com/w3images/lights.jpg",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis. Lorem Ipsum",
      image: "https://www.w3schools.com/w3images/nature.jpg",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis. Lorem Ipsum",
      image: "https://www.w3schools.com/w3images/mountains.jpg",
    },
  ];
  return (
    <div className="fixed inset-0 z-20 flex w-full flex-col items-center justify-center bg-gray-400 bg-opacity-50 p-2 backdrop-blur-sm sm:p-10">
      <GeneralModal
        onClose={() => onClose(false)}
        refModal={refModal}
        customWidth={"w-full lg:w-fit"}
        customHeight={"h-full lg:h-fit"}
      >
        <form
          className="flex w-full max-w-sm space-x-3 md:max-w-xl lg:max-w-sm"
          onSubmit={handleSubmit}
        >
          <div className="m-auto mt-0 flex w-full max-w-2xl flex-col rounded-lg bg-white px-5 py-10 dark:bg-gray-800 sm:mt-auto">
            <h1 className="text-center text-3xl font-light text-gray-800 dark:text-white sm:mb-6">
              {create && !edit && !show && t("CREATE_ARTICLE")}
              {edit && !create && !show && t("EDIT_ARTICLE")}
              {show && !create && !edit && t("ARTICLE_VIEW")}
            </h1>
            <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="article-form-title"
                    className="w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="article-form-type"
                    className="w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Type"
                  />
                </div>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <SelectAuthor data={authors} getAuthor={setCreateArticle} />
              </div>
              <div className="col-span-2">
                <ArticleSliderSwiper slides={slides} />
              </div>
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

export default ModalCreateArticle;
