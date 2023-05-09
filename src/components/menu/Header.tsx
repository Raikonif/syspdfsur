import React, { useEffect, useState } from "react";
import GeneralButton from "~/components/GeneralButton";
import { BiPlusMedical } from "react-icons/all";

function Header(): JSX.Element {
  const [desktopMode, setDesktopMode] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth < 640 ? setDesktopMode(false) : setDesktopMode(true);
  });

  return (
    <>
      <div className="flex w-full">
        {desktopMode && (
          <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-100">
            <div>Header</div>
            <button className="fixed right-14 top-5 flex items-center rounded-xl bg-fuchsia-600">
              <span className="m-1 ml-2 p-1 text-white">New Patient</span>
              <BiPlusMedical className="m-1 mr-2 text-white" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
