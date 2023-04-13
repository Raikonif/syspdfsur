import React from "react";
import NotFoundIcon from "~/assets/bg_not_found.jpg";
function NotFound(): JSX.Element {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${NotFoundIcon})` }}
    >
      <div className="font-serif text-9xl">404</div>
      <div className="font-serif text-5xl">Pagina no Encontrada</div>
    </div>
  );
}

export default NotFound;
