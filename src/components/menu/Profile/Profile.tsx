import React, { useState } from "react";
import ProfileCard from "~/components/menu/Profile/ProfileCard";

interface IProps {
  openModalSignOut: () => void;
}
function Profile({ openModalSignOut }: IProps): JSX.Element {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  return (
    <>
      <button
        className="flex items-center justify-center border-b p-2 pb-4 pr-3 hover:rounded-tr-2xl hover:bg-violet-600 active:bg-violet-400"
        onClick={() => setOpenProfile(!openProfile)}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-2/3 w-2/3 rounded-full border"
            src="https://placeimg.com/400/400/animals"
            alt="..."
          />
          <h1 className="pt-2 text-white">Nandy</h1>
        </div>
      </button>
      {openProfile && (
        <div className="fixed left-2 top-2 ml-40">
          <ProfileCard openModal={openModalSignOut} />
        </div>
      )}
    </>
  );
}

export default Profile;
