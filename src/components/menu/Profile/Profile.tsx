import React, { ReactElement, useEffect, useRef, useState } from "react";
import ProfileCard from "~/components/menu/Profile/ProfileCard";

interface IProps {
  openModalProfile: (open: boolean) => void;
}
function Profile({ openModalProfile }: IProps): ReactElement {
  return (
    <>
      <button
        className="flex items-center justify-center border-b p-2 pb-4 pr-3 hover:rounded-tr-2xl hover:bg-violet-600 active:bg-violet-400"
        onClick={() => openModalProfile(true)}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-2/3 w-2/3 rounded-full border"
            src="https://picsum.photos/200/200"
            alt="..."
          />
          <h1 className="pt-2 text-white">Nandy</h1>
        </div>
      </button>
    </>
  );
}

export default Profile;
