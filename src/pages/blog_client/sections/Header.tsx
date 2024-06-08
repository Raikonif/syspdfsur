import { FaMicroscope, FaMoon, FaSun } from "react-icons/fa";
import { Divider, Switch } from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useState } from "react";
import DarkModeContext from "~/context/DarkModeContext";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { ABOUT, CASES } from "~/constants";
import { useNavigate } from "react-router-dom";

function Header() {
  const [onOpen, setOnOpen] = useState(false);
  const { setTheme, theme } = useContext(DarkModeContext);
  const { handleClickOption } = useContext(ClientContext);
  const handleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const navigate = useNavigate();
  const returnToLanding = () => {
    navigate("/");
  };

  return (
    <>
      <nav
        id="header"
        className="fixed top-0 z-30 w-full bg-gradient-to-b from-fuchsia-700/80 to-violet-700/80 text-white backdrop-blur dark:from-violet-700/80 dark:to-cyan-700/80"
      >
        <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-3 lg:py-5">
          <div
            className="flex cursor-pointer items-center pl-4 active:text-violet-300"
            onClick={returnToLanding}
          >
            <FaMicroscope size={30} className="text-violet-100" />
            <h1 className="ml-4 text-xl font-bold text-violet-100 md:text-2xl lg:text-3xl">
              Blog de Nandy
            </h1>
          </div>
          <div className="flex pr-4 lg:hidden">
            <Switch
              defaultSelected
              size="lg"
              color="secondary"
              startContent={<FaSun />}
              endContent={<FaMoon />}
              onClick={handleDarkMode}
            />
            <span id="nav-toggle" onClick={() => setOnOpen(!onOpen)}>
              <GiHamburgerMenu size={30} />
            </span>
          </div>
          <div
            className="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
            id="nav-content"
          >
            <ul className="list-reset flex-1 items-center justify-end lg:flex">
              <li className="mr-3">
                <span
                  className="inline-block cursor-pointer px-4 py-2 font-bold text-white no-underline"
                  onClick={() => handleClickOption(CASES)}
                >
                  Casos
                </span>
              </li>
              <li className="mr-3">
                <span
                  className="inline-block cursor-pointer px-4 py-2 font-bold text-white no-underline"
                  onClick={() => handleClickOption(ABOUT)}
                >
                  Acerca de mi
                </span>
              </li>
            </ul>
            <Switch
              size="lg"
              color="default"
              startContent={<FaMoon />}
              endContent={<FaSun />}
              onClick={handleDarkMode}
            />
          </div>
        </div>
      </nav>
      <ul
        className={`${
          !onOpen && "hidden"
        } mt-12 border-y border-violet-500 bg-violet-800 p-5 text-center dark:bg-cyan-700`}
      >
        <li className="px-10 pb-3 text-2xl font-semibold dark:text-white">Casos</li>
        <Divider />
        <li className="px-10 pt-3 text-2xl font-semibold dark:text-white">Acerca de mi</li>
      </ul>
    </>
  );
}

export default Header;
