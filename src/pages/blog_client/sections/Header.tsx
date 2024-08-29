import React, { useState } from "react";
import { FaMicroscope } from "react-icons/fa";
import { menuOptions } from "~/constants/options/landing.options";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id="hero"
      className="fixed z-50 flex h-16 w-full items-center bg-purple-950/80 px-4 backdrop-blur-md lg:px-6"
    >
      <span
        className="flex cursor-pointer items-center justify-center"
        onClick={() => scrollToSection("home")}
      >
        <FaMicroscope size={30} className="text-yellow-400" />
        <h1 className="ml-4 font-bold text-violet-100 md:text-xl lg:text-2xl">Blog de Nandy</h1>
      </span>
      <nav
        className={`ml-auto flex gap-4 sm:gap-6 ${
          isMenuOpen ? "flex" : "hidden"
        } absolute left-0 right-0 top-16 flex-col bg-purple-950 p-4 md:relative md:top-0 md:flex md:flex-row md:bg-transparent md:p-0`}
      >
        {menuOptions.map((option, index) => (
          <li key={index}>
            <span
              key={index}
              className={`${
                active === index && "text-yellow-400"
              } cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400`}
              aria-current="page"
              onClick={() => {
                setActive(index);
                scrollToSection(option.section);
              }}
            >
              {option.name}
            </span>
          </li>
        ))}
      </nav>
      <button
        className="ml-auto rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <IoClose className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>
    </header>
  );
}

export default Header;
