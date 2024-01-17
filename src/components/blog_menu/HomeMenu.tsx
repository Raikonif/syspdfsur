import React, { ReactElement, useState } from "react";
import homeOptions from "~/constants/options/home.options";
import IMenuInterface from "~/interfaces/menuInterface";
import { NavLink, useNavigate } from "react-router-dom";
import { GiMicroscope } from "react-icons/all";
import { useTranslation } from "react-i18next";
function HomeMenu(): ReactElement {
  const [goHome, setGoHome] = useState(false);
  const navigateHome = useNavigate();
  const { t } = useTranslation();
  const activeMobile = "bg-slate-200 rounded-full duration-500 mx-2";

  const handleGoHome = () => {
    navigateHome("/");
  };
  return (
    <div className="fixed left-0 top-0 z-10 w-full shadow-md">
      <div className="bg-violet-600 px-2 py-2 sm:justify-between md:flex md:px-10">
        <button
          onClick={handleGoHome}
          className="flex cursor-pointer items-center text-2xl font-bold text-gray-800"
        >
          <GiMicroscope className="mx-2 text-white" size={40} />
          <h3 className="text-white">PANDY BLOG</h3>
        </button>
        <ul className="flex">
          {homeOptions.blogOptions.map((item: IMenuInterface) => (
            <NavLink
              className={({ isActive }): string =>
                `mx-5 rounded-full text-lg duration-500 ${
                  isActive
                    ? "bg-slate-200 text-violet-600"
                    : "text-lg text-white hover:bg-slate-100 hover:text-violet-400"
                }`
              }
              key={item.id}
              to={item.link}
            >
              <li className="m-2 px-5 text-lg font-semibold focus:text-violet-600">
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
