import React from "react";
import {
  FaBook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

function About() {
  return (
    <section className="w-full bg-purple-950 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl">
              Acerca de mí
            </h2>
            <p className="text-gray-300 md:text-xl/relaxed">
              Soy la Dra. Nandy, Medico especialista en Anatomia Patológica, con mas de 7 años de
              experiencia.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaBook className="mr-2 h-5 w-5 text-yellow-400" /> 10+ Años de experiencia
              </li>
              <li className="flex items-center">
                <FaUserDoctor className="mr-2 h-5 w-5 text-yellow-400" /> Doctor y Docente
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative h-[400px]">
            <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-br from-yellow-400 to-purple-600"></div>
            <img
              alt="Nandy Trabajando"
              className="absolute inset-0 h-full w-full rounded-lg object-cover object-center mix-blend-overlay"
              height="400"
              src="/placeholder.svg?height=400&width=300"
              width="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
