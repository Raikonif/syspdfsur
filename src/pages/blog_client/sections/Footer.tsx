import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTable,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/all";
import { Tooltip } from "@nextui-org/react";

function Footer() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-white to-violet-700 py-12 pb-10 dark:from-black dark:to-violet-700 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tighter text-violet-700 dark:text-white sm:text-4xl md:text-5xl">
            Contactame a traves de mis Redes Sociales.
          </h2>
        </div>
        <div className="flex justify-between gap-6 lg:gap-12">
          <Tooltip content={"Twitter"}>
            <a className="flex flex-col items-center gap-2 rounded-full" href="#">
              <FaTwitter className="h-16 w-16 hover:text-cyan-400" />
            </a>
          </Tooltip>
          <Tooltip content={"Facebook"}>
            <a className="flex flex-col items-center gap-2" href="#">
              <FaFacebook className="h-16 w-16 hover:text-blue-600" />
            </a>
          </Tooltip>
          <Tooltip content={"LinkedIn"}>
            <a className="flex flex-col items-center gap-2" href="#">
              <FaLinkedinIn className="h-16 w-16 hover:text-blue-500" />
            </a>
          </Tooltip>
          <Tooltip content={"Youtube"}>
            <a className="flex flex-col items-center gap-2" href="#">
              <FaYoutube className="h-16 w-16 hover:text-red-500" />
            </a>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default Footer;
