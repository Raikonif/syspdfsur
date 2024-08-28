import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-purple-800 bg-purple-950 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex space-x-4">
            <a
              href={"https://x.com/Raikonif"}
              target={"_blank"}
              className="text-gray-300 transition-colors hover:text-yellow-400"
              rel="noreferrer"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href={"https://github.com/Raikonif"}
              target={"_blank"}
              className="text-gray-300 transition-colors hover:text-yellow-400"
              rel="noreferrer"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={"https://www.linkedin.com/in/raikonif/"}
              target={"_blank"}
              className="text-gray-300 transition-colors hover:text-yellow-400"
              rel="noreferrer"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-gray-400">© 2024 Raikonif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
