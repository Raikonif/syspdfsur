import React from "react";
import NotFoundIcon from "~/assets/bg_not_found.jpg";
function NotFound(): JSX.Element {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${NotFoundIcon})` }}
    >
      <div className="text-9xl font-serif">404</div>
      <div className="text-5xl font-serif">Pagina no Encontrada</div>
    </div>
  );
}

export default NotFound;
