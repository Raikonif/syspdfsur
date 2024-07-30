import React from "react";
import GeneralButton from "~/components/GeneralButton";
import { FaUserEdit } from "react-icons/fa";

interface IProps {
  openModal: (open: boolean) => void;
}
function ProfileCard({ openModal }: IProps): JSX.Element {
  return (
    <div className="fixed z-20 flex h-60 w-60 flex-col items-center justify-center rounded-lg border border-gray-300 bg-white shadow-2xl">
      <img
        className="h-30 w-30 rounded-full shadow-xl"
        src="https://picsum.photos/100/100"
        alt="..."
      />
      <h1 className="text-violet-600">Nandy</h1>
      <h1 className="text-violet-600">Calle Peñaranda</h1>
      <div className="my-2 flex">
        <FaUserEdit className="m-1" />
        <button className="border-2 border-slate-50">
          <span className="text-gray-400 active:text-gray-300">Edit Information</span>
        </button>
      </div>
      <GeneralButton textButton={"Sign Out"} btnType={"button"} action={() => openModal(true)} />
    </div>
  );
}

export default ProfileCard;
