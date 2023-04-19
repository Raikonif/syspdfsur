import React from "react";

interface IProps {
  isMobileSize: boolean;
}
function SearchField({ isMobileSize }: IProps): JSX.Element {
  return (
    <div className="mb-2 ml-2 mt-2 rounded-md pl-2 pr-6">
      <input
        className={`${
          isMobileSize
            ? "h-8 rounded-lg bg-white px-3 focus:outline-white xs:w-60"
            : "mx-3 h-9 w-full rounded-lg border-2 bg-white px-3 focus:outline-white"
        } `}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchField;
