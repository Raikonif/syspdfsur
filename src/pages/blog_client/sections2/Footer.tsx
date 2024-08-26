import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full border-t border-purple-800 bg-purple-950 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400">© 2024 Raikonif. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a
              className="text-xs text-gray-400 underline-offset-4 hover:text-gray-200 hover:underline"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs text-gray-400 underline-offset-4 hover:text-gray-200 hover:underline"
              href="#"
            >
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
