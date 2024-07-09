import React, { ReactElement, useContext } from "react";
import { useTranslation } from "react-i18next";
import GenericModal from "~/components/GenericModal";
import AdminContext from "~/pages/admin/context/AdminContext";

function ModalDelete(): ReactElement {
  const { isOpenDelete, onCloseDelete, functionDelete, onCloseCase } = useContext(AdminContext);
  const { t } = useTranslation();
  const { nameDelete, setSelectedKey } = useContext(AdminContext);

  const handleDelete = async () => {
    await functionDelete();
    onCloseCase();
  };
  const handleClose = () => {
    onCloseDelete();
    setSelectedKey("see");
  };

  return (
    <GenericModal
      onClose={handleClose}
      isOpen={isOpenDelete}
      title={"Borrar Registro"}
      onClickConfirm={async () => onCloseDelete()}
    >
      <div className="m-auto w-64 rounded-2xl p-4 shadow-lg">
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
            <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
              {`Estas Seguro de querer borrar este ${nameDelete}?`}
            </p>
          </div>
        </div>
      </div>
    </GenericModal>
  );
}

export default ModalDelete;
