import React, { ReactElement } from "react";
import homeOptions from "~/constants/options/home.options";
import IMenuInterface from "~/interfaces/menuInterface";
import { NavLink, useNavigate } from "react-router-dom";
import { GiMicroscope } from "react-icons/gi";
import { useTranslation } from "react-i18next";
function HomeMenu(): ReactElement {
  const navigateHome = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    navigateHome("/");
  };
  return (
    <div className="fixed left-0 top-0 z-10 w-full">
      <div className="bg-violet-700/90 px-2 backdrop-blur-sm md:justify-between md:px-10 lg:flex">
        <button
          onClick={handleGoHome}
          className="flex w-full cursor-pointer items-center justify-center py-3 text-2xl font-bold text-gray-800 lg:w-auto"
        >
          <GiMicroscope className="mx-2 text-white" size={35} />
          <h1 className="font-semibold text-white sm:font-light">Pandy Blog</h1>
        </button>
        <ul className="m-2 flex w-auto items-center justify-between pb-3 sm:pb-0">
          {homeOptions.blogOptions.map((item: IMenuInterface) => (
            <NavLink
              className={({ isActive }): string =>
                `mx-1 rounded-full p-1 text-xs duration-500 sm:m-2 sm:cursor-pointer sm:text-sm md:p-0 ${
                  isActive
                    ? "bg-slate-200 text-violet-600  dark:bg-gradient-to-r dark:from-pink-500 dark:to-violet-700 dark:to-70% dark:text-white"
                    : "text-white hover:bg-slate-100 hover:text-violet-400 dark:hover:bg-slate-600"
                }`
              }
              key={item.id}
              to={item.link}
            >
              <li className="m-1 px-1 text-sm font-semibold focus:text-violet-600 sm:m-2 sm:px-5">
                {t(item.title.toUpperCase())}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeMenu;
