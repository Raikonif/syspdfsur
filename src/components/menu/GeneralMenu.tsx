import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/all";
import ButtonMenu from "~/components/menu/ButtonMenu";
import Profile from "~/components/menu/Profile/Profile";
import SignOutModal from "~/components/menu/Profile/SignOutModal";
import { Link, NavLink } from "react-router-dom";

interface IMenuProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}

interface IProps {
  itemList: IMenuProps[];
  isMobileMode: boolean;
}

function GeneralMenu({ itemList, isMobileMode }: IProps): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [openSignOut, setopenSignOut] = useState<boolean>(false);
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };
  const active = "bg-violet-600 text-slate-200 border-l-2 border-slate-200";

  const listItems: JSX.Element[] = itemList.map((item: IMenuProps) =>
    isMobileMode ? (
      <NavLink
        className="m-1 p-2 text-white duration-300 hover:scale-125 active:scale-125 active:border-l-2"
        key={item.id}
        to={item.link}
      >
        {item.title}
      </NavLink>
    ) : (
      <NavLink
        className={`${({ isActive }: any) => (isActive ? active : "")}`}
        key={item.id}
        to={item.link}
      >
        <li className="flex flex-col pb-10 pl-4 pt-10 text-white shadow hover:bg-violet-600 hover:text-slate-200 hover:shadow-lg active:bg-violet-400">
          {item.title}
        </li>
      </NavLink>
    ),
  );
  return (
    <>
      {isMobileMode ? (
        <div className="h-15 fixed w-full bg-fuchsia-600 opacity-90">
          <div className="flex flex-col">
            <ButtonMenu
              handleClick={handleClickMenu}
              iconType={<GiHamburgerMenu className="m-2 h-7 w-8" />}
            />

            {showMenu && (
              <div>
                <ul className="flex flex-col items-center justify-center">{listItems}</ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="fixed h-screen w-40 rounded-r-2xl bg-fuchsia-600">
          <Profile openModalSignOut={() => setopenSignOut(true)} />
          {openSignOut && (
            <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-400 bg-opacity-50 backdrop-blur-sm">
              <SignOutModal onClose={() => setopenSignOut(false)} />
            </div>
          )}
          <ul className="text-white">{listItems}</ul>
        </div>
      )}
    </>
  );
}

export default GeneralMenu;
