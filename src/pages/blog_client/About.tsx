import React from "react";
import profile from "~/assets/profile.png";
import dragon_scales from "~/assets/dragon-scales.svg";
import acuarela from "~/assets/acuarela.svg";
import { useTranslation } from "react-i18next";
import {
  FaAward,
  FaBriefcase,
  FaGitlab,
  FaLinkedin,
  FaRocket,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col">
        <section className="relative h-[70vh] w-full bg-violet-100 md:h-[80vh]">
          <img
            src={acuarela}
            alt="Hero Background"
            className="absolute inset-0 h-full w-full fill-current object-cover opacity-50"
            width={1920}
            height={1080}
          />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
            <h1 className="text-4xl font-bold tracking-tight text-violet-700 md:text-6xl">
              Acerca de mi
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-violet-500 md:text-xl">
              Conoce mas sobre mi trayectoria profesional.
            </p>
            {/* <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Get to Know Us
            </a> */}
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">¿Quien Soy?</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  We are a team of passionate individuals dedicated to creating innovative solutions
                  that make a real difference. Our mission is to empower businesses and individuals
                  to achieve their goals through cutting-edge technology and exceptional service.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-start">
                  <FaRocket className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">Innovative Solutions</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    We develop cutting-edge solutions to help our clients succeed.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <FaUser className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">Exceptional Service</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Our team is dedicated to providing top-notch support and service.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <FaBriefcase className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">Proven Track Record</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    We have a long history of delivering successful projects for our clients.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <FaAward className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium">Industry Recognition</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Our work has been recognized by industry leaders and organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Meet Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500 dark:text-gray-400">
              Our team is composed of talented and experienced individuals who are passionate about
              what they do.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member 1"
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder &amp; CEO</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaGitlab className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member 2"
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">Co-Founder &amp; CTO</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaGitlab className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member 3"
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Michael Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400">Lead Designer</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaGitlab className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-900">
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/placeholder.svg"
                    alt="Team Member 4"
                    className="h-full w-full object-cover"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">Emily Davis</h3>
                  <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                    >
                      <FaGitlab className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
