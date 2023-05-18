import React, { useState } from "react";
import homeOptions from "~/constants/options/home.options";
import IMenuInterface from "~/interfaces/menuInterface";
import { NavLink } from "react-router-dom";
import { BsFillSunFill, FaMoon } from "react-icons/all";

function HomeMenu(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const activeDesktop = "bg-violet-500 rounded-full duration-500";
  const activeMobile = "bg-violet-500 rounded-full duration-500";
  const listMenu: JSX.Element[] = homeOptions.blogOptions.map((item: IMenuInterface) => (
    <NavLink
      className="hover:rounded-lg hover:bg-slate-200 hover:duration-500"
      key={item.id}
      to={item.link}
    >
      <li className="m-2 text-lg font-semibold text-violet-700">{item.title}</li>
    </NavLink>
  ));

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex w-full items-center justify-between p-3 px-5">
      <img src="/icon-page.svg" className="h-9 w-9 rounded-full border border-white" alt="..." />
      <ul className="flex">{listMenu}</ul>
      {isDarkMode ? (
        <BsFillSunFill className="h-9 w-9 text-slate-100" onClick={handleDarkMode} />
      ) : (
        <FaMoon className="h-9 w-9 text-slate-700" onClick={handleDarkMode} />
      )}
    </div>
  );
}

export default HomeMenu;
