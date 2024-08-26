import { BookOpen, Menu, X } from "lucide-react";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 flex h-16 w-full items-center bg-purple-950/80 px-4 backdrop-blur-md lg:px-6">
      <a className="flex items-center justify-center" href="#">
        <BookOpen className="h-6 w-6 text-yellow-400" />
        <span className="ml-2 text-xl font-bold text-white">Jane Doe</span>
      </a>
      <nav
        className={`ml-auto flex gap-4 sm:gap-6 ${
          isMenuOpen ? "flex" : "hidden"
        } absolute left-0 right-0 top-16 flex-col bg-purple-950 p-4 md:relative md:top-0 md:flex md:flex-row md:bg-transparent md:p-0`}
      >
        <a
          className="text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400"
          href="#"
        >
          Home
        </a>
        <a
          className="text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400"
          href="#"
        >
          Blog
        </a>
        <a
          className="text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400"
          href="#"
        >
          About
        </a>
        <a
          className="text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400"
          href="#"
        >
          Contact
        </a>
      </nav>
      <button
        className="ml-auto rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </header>
  );
}

export default Header;
