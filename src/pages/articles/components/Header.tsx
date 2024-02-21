import React, { ReactElement } from "react";
import { BiPlusMedical } from "react-icons/all";
import Search from "~/components/menu/search/Search";

interface HeaderProps {
  setShowModal: (newState: boolean) => void;
  showModal: boolean;
}
function Header({ setShowModal, showModal }: HeaderProps): ReactElement {
  return (
    <div className="flex max-h-[80px] w-full justify-end border-b-2 bg-slate-50 py-5 backdrop-blur-sm backdrop-opacity-50 sm:pr-5">
      <div>
        <Search />
      </div>
      <button
        onClick={() => setShowModal(!showModal)}
        className="flex items-center rounded-md bg-indigo-600 p-2 text-white"
      >
        <p>Crear Artículo </p>
        <BiPlusMedical className="m-1 mr-2 text-center text-white" />
      </button>
    </div>
  );
}

export default Header;
