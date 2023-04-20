import React, { useState } from "react";
import ProfileCard from "~/components/menu/Profile/ProfileCard";

function Profile(): JSX.Element {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  return (
    <>
      <button
        className="flex items-center justify-center border-b p-2 pb-4 hover:rounded-tr-2xl hover:bg-violet-600 active:bg-violet-400"
        onClick={() => setOpenProfile(!openProfile)}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-2/3 w-2/3 rounded-full border"
            src="https://placeimg.com/400/400/animals"
            alt="..."
          />
          <h1 className="text-white">Nandy</h1>
        </div>
      </button>
      {openProfile && (
        <div className="ml-10 mt-2">
          <ProfileCard />
        </div>
      )}
    </>
  );
}

export default Profile;
