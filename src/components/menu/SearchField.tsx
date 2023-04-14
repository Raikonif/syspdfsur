import React from "react";

interface IProps {
  handleClick: () => void;
}
function SearchField(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="h-8 rounded-lg bg-white px-3 focus:outline-white xs:w-60"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchField;
