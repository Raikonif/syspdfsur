import React from "react";
import textConstants from "./constants/texts.constants";
function HomeHeader(): JSX.Element {
  return (
    <div className="mb-3 flex w-full items-start justify-start p-1">
      <img
        src="/photo_profile.jpg"
        alt="..."
        className="mr-5 h-[60px] w-[60px] rounded-full border-4 border-violet-700"
      />
      <h1 className="mb-3 font-sans text-xl dark:text-white">
        {textConstants.header.introduction}
      </h1>
    </div>
  );
}

export default HomeHeader;
