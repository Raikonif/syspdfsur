import React from "react";
import illus_lab from "~/assets/illus_lab.svg";
import cell_icon from "~/assets/cell-icon.svg";
function Hero() {
  return (
    <section className="bg-gradient-to-b from-violet-700 from-70% to-violet-200 pb-16 pt-44 dark:from-cyan-700 dark:to-violet-900 lg:pt-5">
      <div className="container mx-auto flex flex-col flex-wrap items-center px-3 md:flex-row lg:pt-20">
        {/* <!--Left Col--> */}
        <div className="flex w-full flex-col items-start justify-center text-center text-white md:w-1/2 md:text-left">
          <p className="tracking-loose w-full uppercase text-white">Blog personal de Patologia</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Soy Medico Especialista en Anatomia Patologica
          </h1>
          <p className="mb-8 text-2xl leading-normal">
            Los Articulos acerca de mi especialidad y otros temas de interes seran publicados Aqui
          </p>
          <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-white px-8 py-4 font-bold text-gray-800 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
            Contactame
          </button>
        </div>
        {/* <!--Right Col--> */}
        <div className="hidden w-full py-6 pt-44 text-center md:w-1/2 lg:flex lg:pt-6">
          <img
            className="w-full border-violet-500"
            src={illus_lab}
            alt="Ilustracion de Laboratorio"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
