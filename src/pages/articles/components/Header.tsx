import React, { ReactElement } from "react";
import { BiPlusMedical } from "react-icons/all";
import Search from "~/components/menu/search/Search";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  setShowModal: (newState: boolean) => void;
  showModal: boolean;
}

function Header({ setShowModal, showModal }: HeaderProps): ReactElement {
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden max-h-[80px] w-full items-center justify-center border-b-2 bg-slate-50 py-5 backdrop-blur-sm backdrop-opacity-50 sm:flex sm:justify-end sm:pr-5">
        <div className="flex w-full items-center px-3 sm:mt-3 sm:px-5">
          <Search />
        </div>
        <button
          onClick={() => setShowModal(!showModal)}
          className="items-center rounded-md bg-indigo-600"
        >
          <div className="flex items-center text-xs text-white">
            <p>{t("CREATE_ARTICLE")}</p>
            <BiPlusMedical className="text-center" />
          </div>
        </button>
      </div>
    </>
  );
}

export default Header;
