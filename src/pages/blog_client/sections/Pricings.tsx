import React from "react";

function Pricings() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-2 pb-12 pt-4 text-gray-800">
        <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
          Pricing
        </h2>
        <div className="mb-4 w-full">
          <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
        </div>
        <div className="my-12 flex flex-col justify-center pt-12 sm:my-4 sm:flex-row">
          <div className="mx-auto mt-4 flex w-5/6 flex-col rounded-none bg-white lg:mx-0 lg:w-1/4 lg:rounded-l-lg">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white text-gray-600 shadow">
              <div className="border-b-4 p-8 text-center text-3xl font-bold">Free</div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
              <div className="w-full pt-6 text-center text-3xl font-bold text-gray-600">
                £0
                <span className="text-base">for one user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="z-10 mx-auto mt-4 flex w-5/6 flex-col rounded-lg bg-white shadow-lg sm:-mt-6 lg:mx-0 lg:w-1/3">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
              <div className="w-full p-8 text-center text-3xl font-bold">Basic</div>
              <div className="gradient my-0 h-1 w-full rounded-t py-0"></div>
              <ul className="w-full text-center text-base font-bold">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
              <div className="w-full pt-6 text-center text-4xl font-bold">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-4 flex w-5/6 flex-col rounded-none bg-white lg:mx-0 lg:w-1/4 lg:rounded-l-lg">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white text-gray-600 shadow">
              <div className="border-b-4 p-8 text-center text-3xl font-bold">Pro</div>
              <ul className="w-full text-center text-sm">
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
                <li className="border-b py-4">Thing</li>
              </ul>
            </div>
            <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow">
              <div className="w-full pt-6 text-center text-3xl font-bold text-gray-600">
                £x.99
                <span className="text-base">/ per user</span>
              </div>
              <div className="flex items-center justify-center">
                <button className="gradient focus:shadow-outline mx-auto my-6 transform rounded-full px-8 py-4 font-bold text-white shadow-lg duration-300 ease-in-out transition hover:scale-105 hover:underline focus:outline-none lg:mx-0">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricings;
