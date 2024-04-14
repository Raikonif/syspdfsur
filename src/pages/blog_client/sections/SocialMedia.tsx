import React from "react";

function SocialMedia() {
  return (
    <section className="container mx-auto mb-12 p-6 text-center">
      <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-white">
        Mis Redes Sociales
      </h2>
      <div className="mb-4 w-full">
        <div className="mx-auto my-0 h-1 w-1/6 rounded-t bg-white py-0 opacity-25"></div>
      </div>
      <h3 className="my-4 text-3xl leading-tight">Main Hero Message to sell yourself!</h3>
      <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-white px-8 py-4 font-bold text-gray-800 shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none lg:mx-0">
        Contactame
      </button>
    </section>
  );
}

export default SocialMedia;
