import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import GeneralModal from "~/components/modal/GeneralModal";

interface DeleteItemProps {
  onClose: (newState: boolean) => void;
  confirmDelete: (newState: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
  customText?: string;
}

function ModalDeleteItem({
  onClose,
  confirmDelete,
  refModal,
  customText = "Article",
}: DeleteItemProps): ReactElement {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal
        onClose={() => onClose(false)}
        refModal={refModal}
        customWidth={"w-fit"}
        customHeight={"h-fit"}
      >
        <div className="m-auto w-64 rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
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
              <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                {`Remove ${customText}`}
              </p>
              <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
                {`Are you sure you want to delete this ${customText} ?`}
              </p>
              <div className="mt-8 flex w-full items-center justify-between gap-4">
                <button
                  type="button"
                  className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
                  onClick={() => {
                    confirmDelete(true);
                    onClose(false);
                  }}
                >
                  {t("DELETE")}
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg bg-slate-400 px-4 py-2 text-center text-base font-semibold text-indigo-500 text-white shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
                  onClick={() => onClose(false)}
                >
                  {t("CANCEL")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalDeleteItem;
