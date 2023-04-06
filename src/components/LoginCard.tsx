import React from "react";
import { FaHospitalUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function LoginCard(): JSX.Element {
  return (
    <div className="min-h-full min-w-full">
      <div className=" bg-slate-50 w-80 h-60 shadow-2xl rounded-lg space-x-4 pb-4">
        <h1 className="p-5 border-b font-sans bg-violet-500 rounded-t-lg text-center text-white shadow">
          PANDY LOGIN
        </h1>
        <div className="flex flex-col items-center justify-center mt-4 ">
          <label className="block" id="email">
            <span className="font-sans ml-7 text-slate-500">E-mail</span>
            <div className="flex">
              <FaHospitalUser className="mt-2 text-xl text-violet-500" />
              <input
                className="m-2 bg-slate-50 border-2 rounded-lg border-violet-500 hover:border-violet-300 active:bg-violet-400 focus:outline-violet-700"
                id="email"
                name="email"
              />
            </div>
          </label>
          <label className="block" id="pass">
            <span className="font-sans ml-7 text-slate-500">Password</span>
            <div className="flex">
              <RiLockPasswordFill className="mt-2 text-xl text-violet-500" />
              <input
                className="m-2 bg-slate-50 border-2 rounded-lg border-violet-500 hover:border-violet-300 active:bg-violet-400 focus:outline-violet-700"
                id="pass"
                name="pass"
              />
            </div>
          </label>
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
