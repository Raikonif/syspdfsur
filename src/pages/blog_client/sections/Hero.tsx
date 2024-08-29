import React, { useContext, useEffect, useState } from "react";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import illus_lab from "~/assets/illus_lab.svg";
import { ABOUT, CASES } from "~/constants";
import { Case } from "~/interfaces/Case.interface";

function Hero() {
  const [lastPost, setLastPost] = useState<Case>({} as Case);
  const { scrollToSection, cases, handleClickOption } = useContext(ClientContext);

  useEffect(() => {
    if (cases && cases.data) {
      setLastPost(cases.data[0]);
    }
  }, [cases]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-12 pt-20 md:py-24 lg:py-32 xl:py-48 xl:pt-60"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Blog Profesional de Patologia
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Publicación de casos y articulos de la Dra. Nandy Calle Peñaranda
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <span
                onClick={() => handleClickOption(`${CASES}/${lastPost.id}`)}
                className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-purple-950 shadow transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-500"
              >
                Leer el Último Caso
              </span>
              <span
                onClick={() => scrollToSection(ABOUT)}
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-purple-950 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-900 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700"
              >
                Acerca de Mí
              </span>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px]">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-yellow-400 to-purple-600"></div>
            <img
              alt="Nandy"
              className="absolute inset-0 h-full w-full rounded-full object-cover object-center mix-blend-overlay"
              height="400"
              src={illus_lab}
              width="400"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
    </section>
  );
}

export default Hero;
