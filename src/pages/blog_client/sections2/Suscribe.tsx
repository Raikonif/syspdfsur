import React from "react";

function Suscribe() {
  return (
    <section className="w-full bg-yellow-400 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-purple-950 sm:text-4xl md:text-5xl">
              Contáctame
            </h2>
            <p className="mx-auto max-w-[600px] text-purple-900 md:text-xl/relaxed">
              Sigueme a traves de mi correo o mis redes sociales
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                className="h-10 flex-1 rounded-md border border-purple-300 bg-white px-3 py-2 text-sm text-purple-950 placeholder:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="h-10 rounded-md bg-purple-950 px-8 text-sm font-medium text-yellow-400 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
              >
                Enviame un Mensaje
              </button>
            </form>
            {/*<p className="text-xs text-purple-900">*/}
            {/*  I respect your privacy. Unsubscribe at any time.*/}
            {/*</p>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Suscribe;
