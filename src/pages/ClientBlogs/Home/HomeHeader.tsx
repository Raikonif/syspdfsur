import React from "react";
import textConstants from "./constants/texts.constants";
function HomeHeader(): JSX.Element {
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <img
        src="/photo_profile.jpg"
        alt="..."
        className="mb-5 h-16 w-16 rounded-full border-4 border-violet-700"
      />
      <h1 className="mb-3 font-sans text-xl">{textConstants.header.introduction}</h1>
    </div>
  );
}

export default HomeHeader;
