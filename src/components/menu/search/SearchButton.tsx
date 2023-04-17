import React, { useEffect, useState } from "react";
import ButtonMenu from "~/components/menu/ButtonMenu";
import { BsFillSearchHeartFill } from "react-icons/all";
import SearchField from "~/components/menu/search/SearchField";

interface IProps {
  isMobileMode: boolean;
}
function SearchButton({ isMobileMode }: IProps): JSX.Element {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [iconColor, setIconColor] = useState<string>("text-white");
  useEffect(() => {
    isMobileMode ? setIconColor("text-white") : setIconColor("text-fuchsia-600");
  });
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="fixed right-0 top-0 z-10">
      <div className="flex">
        {showSearch && <SearchField isMobileSize={isMobileMode} />}
        <ButtonMenu
          handleClick={handleSearch}
          iconType={
            <BsFillSearchHeartFill className={`${iconColor} z-20 mr-3 mt-3 flex h-7 w-8`} />
          }
        />
      </div>
    </div>
  );
}

export default SearchButton;
