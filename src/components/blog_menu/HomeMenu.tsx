import React, { ReactElement, useState } from "react";
import homeOptions from "~/constants/options/home.options";
import IMenuInterface from "~/interfaces/menuInterface";
import { NavLink, useNavigate } from "react-router-dom";
import { GiMicroscope } from "react-icons/all";
import { useTranslation } from "react-i18next";
function HomeMenu(): ReactElement {
  const navigateHome = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    navigateHome("/");
  };
  return (
    <div className="fixed left-0 top-0 z-10 w-full shadow-md">
      <div className="bg-violet-700/90 px-2 py-2 backdrop-blur-sm md:justify-between md:px-10 lg:flex">
        <button
          onClick={handleGoHome}
          className="mb-3 flex cursor-pointer items-center text-2xl font-bold text-gray-800"
        >
          <GiMicroscope className="mx-2 text-white" size={40} />
          <h3 className="text-white">PANDY BLOG</h3>
        </button>
        <ul className="m-2 flex w-auto items-center justify-between">
          {homeOptions.blogOptions.map((item: IMenuInterface) => (
            <NavLink
              className={({ isActive }): string =>
                `mx-1 rounded-full text-xs duration-500 sm:mx-5 sm:cursor-pointer sm:text-lg ${
                  isActive
                    ? "bg-slate-200 text-violet-600 dark:bg-transparent dark:bg-gradient-to-r dark:from-purple-600 dark:to-violet-600 dark:text-white"
                    : "text-lg text-white hover:bg-slate-100 hover:text-violet-400 dark:hover:bg-slate-700"
                }`
              }
              key={item.id}
              to={item.link}
            >
              <li className="m-1 px-3 text-sm font-semibold focus:text-violet-600 sm:m-2 sm:px-5 sm:text-lg">
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
