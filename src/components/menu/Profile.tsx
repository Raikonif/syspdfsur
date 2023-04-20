import React from "react";

function Profile(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center border-b p-2 pb-4 hover:rounded-tr-2xl hover:bg-violet-600">
      <img
        className="h-2/3 w-2/3 rounded-full border"
        src="https://placeimg.com/400/400/animals"
        alt="..."
      />
      <h1 className="text-white">Nandy</h1>
    </div>
  );
}

export default Profile;
