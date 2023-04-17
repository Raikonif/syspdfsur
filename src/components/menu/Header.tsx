import React, { useEffect, useState } from "react";
import ButtonMenu from "~/components/menu/ButtonMenu";
import { BsFillSearchHeartFill } from "react-icons/all";
import SearchButton from "~/components/menu/search/SearchButton";

function Header(): JSX.Element {
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth < 640 ? setMobileMode(false) : setMobileMode(true);
  });

  return (
    <>
      <div className="flex w-full">
        {mobileMode && (
          <div className="h-20 w-full rounded-lg bg-slate-100">
            <div>Header</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
