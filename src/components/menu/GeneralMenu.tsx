import React, { ReactElement, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonMenu from "~/components/menu/ButtonMenu";
import Profile from "~/components/menu/Profile/Profile";
import { NavLink } from "react-router-dom";

interface IMenuProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}

interface IProps {
  itemList: IMenuProps[];
  modalProfile: (open: boolean) => void;
}

function GeneralMenu({ itemList, modalProfile }: IProps): ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/*Mobile Menu*/}
      <div className="fixed flex w-full flex-col justify-center bg-fuchsia-600 opacity-90 lg:hidden">
        <ButtonMenu
          handleClick={handleClickMenu}
          iconType={<GiHamburgerMenu size={40} className="p-2 text-center" />}
        />

        {showMenu && (
          <ul className="flex w-full flex-col">
            {itemList.map((item: IMenuProps) => (
              <NavLink
                key={item.id}
                to={item.link}
                onClick={() => setShowMenu(false)}
                className={({ isActive }): string =>
                  `${
                    isActive ? "animate-pulse bg-fuchsia-700" : "bg-fuchsia-600"
                  }  flex justify-center`
                }
              >
                <li className="m-2 block p-2 text-center text-white duration-300 hover:scale-125">
                  {item.title}
                </li>
              </NavLink>
            ))}
          </ul>
        )}
      </div>
      {/*Desktop Menu*/}
      <div className="hidden h-screen max-w-[130px] rounded-r-2xl bg-fuchsia-600 lg:flex lg:flex-col">
        <Profile openModalProfile={() => modalProfile(true)} />
        <ul className="w-full text-white">
          {itemList.map((item: IMenuProps) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `${
                  isActive && "rounded border-slate-200 bg-fuchsia-500 text-slate-200"
                } flex w-full flex-col`
              }
            >
              <li className="hidden pb-10 pl-4 pr-1 pt-10 text-white shadow hover:bg-violet-600 hover:text-slate-200 hover:shadow-lg active:bg-violet-400 sm:flex sm:flex-col">
                {item.title}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GeneralMenu;
