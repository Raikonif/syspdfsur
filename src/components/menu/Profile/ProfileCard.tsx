import React from "react";
import Button from "~/components/Button";
import { FaUserEdit } from "react-icons/all";

function ProfileCard(): JSX.Element {
  return (
    <div className="fixed flex h-60 w-40 flex-col items-center justify-center rounded-xl border border-gray-400 bg-white px-1 shadow-2xl">
      <img className="rounded-full " src="https://placeimg.com/100/100/animals" alt="..." />
      <h1 className="text-violet-600">Nandy</h1>
      <h1 className="text-violet-600">Calle Peñaranda</h1>
      <div className="my-2 flex">
        <FaUserEdit className="m-1" />
        <button className="border-2 border-slate-50">
          <span className="text-gray-400 active:text-gray-300">Edit Information</span>
        </button>
      </div>
      <Button textButton={"Sign Out"} btnType={"button"} />
    </div>
  );
}

export default ProfileCard;
