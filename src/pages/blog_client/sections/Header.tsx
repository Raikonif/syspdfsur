import { FaMicroscope, FaMoon, FaSun } from "react-icons/fa";
import { Divider, Switch } from "@nextui-org/react";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useState } from "react";
import DarkModeContext from "~/context/DarkModeContext";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { ABOUT, CASES } from "~/constants";

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

  return (
    <>
      <nav
        id="header"
        className="fixed top-0 z-30 w-full bg-gradient-to-b from-fuchsia-700/80 to-violet-700/80 text-white backdrop-blur"
      >
        <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-3 lg:py-5">
          <div className="flex items-center pl-4">
            <FaMicroscope size={30} />
            <h1 className="ml-4 text-3xl font-bold">Blog de Nandy</h1>
          </div>
          <div className="flex pr-4 lg:hidden">
            <Switch
              defaultSelected
              size="lg"
              color="secondary"
              startContent={<FaMoon />}
              endContent={<FaSun />}
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
                  Articles
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
              defaultSelected
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
        } -mt-14 border-y border-violet-500 bg-violet-800 p-5 text-center`}
      >
        <li className="px-10 text-2xl font-semibold dark:text-white">Artículos</li>
        <Divider />
        <li className="px-10 text-2xl font-semibold dark:text-white">Acerca de mi</li>
      </ul>
    </>
  );
}

export default Header;
