import React, { ReactElement, useEffect, useState } from "react";
import { BiPlusMedical } from "react-icons/all";

interface IProps {
  setModalCreate: (isOpen: boolean) => void;
}
function Header({ setModalCreate }: IProps): ReactElement {
  const [desktopMode, setDesktopMode] = useState<boolean>(false);

  useEffect(() => {
    window.innerWidth < 640 ? setDesktopMode(false) : setDesktopMode(true);
  });
  return (
    <div className="fixed left-36 right-0 top-0 z-10">
      <div className="flex w-full">
        {desktopMode && (
          <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-100">
            <button
              className="fixed right-14 top-5 flex items-center rounded-xl bg-fuchsia-600"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                setModalCreate(true);
                event.stopPropagation();
              }}
            >
              <span className="m-1 ml-2 p-1 text-white">New Patient</span>
              <BiPlusMedical className="m-1 mr-2 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
