import React, { ReactElement, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { useTranslation } from "react-i18next";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}
function ModalCreateArticle({ onClose, refModal }: IProps): ReactElement {
  const [agreed, setAgreed] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={() => onClose(false)} refModal={refModal}>
        <form className="flex w-full max-w-sm space-x-3">
          <div className="m-auto mt-10 w-full max-w-2xl rounded-lg bg-white px-5 py-10 shadow dark:bg-gray-800">
            <h1 className="mb-6 text-center text-3xl font-light text-gray-800 dark:text-white">
              {t("CREATE_ARTICLE")}
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
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="article-author"
                    className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                    id="article-form-content"
                    placeholder="Enter your Content"
                    name="comment"
                    rows={5}
                    cols={40}
                  ></textarea>
                </label>
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
