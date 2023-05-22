import React, { useEffect, useState } from "react";
import homeOptions from "~/constants/options/home.options";
import IMenuInterface from "~/interfaces/menuInterface";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillSunFill, FaMoon } from "react-icons/all";

function HomeMenu(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [goHome, setGoHome] = useState(false);
  const navigateHome = useNavigate();
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
  const handleGoHome = () => {
    navigateHome("/");
  };
  return (
    <div className="righ-0 fixed left-0 top-0 flex w-full items-center justify-between bg-white p-3 px-5">
      <button onClick={handleGoHome}>
        <img
          src="/icon-page.svg"
          className="h-10 w-10 rounded-full border border-white duration-500 hover:border-slate-200"
          alt="..."
        />
      </button>

      <ul className="flex">{listMenu}</ul>
      {isDarkMode ? (
        <BsFillSunFill className="h-9 w-9 text-slate-100" onClick={handleDarkMode} />
      ) : (
        <FaMoon className="h-8 w-8 text-slate-700" onClick={handleDarkMode} />
      )}
    </div>
  );
}

export default HomeMenu;
