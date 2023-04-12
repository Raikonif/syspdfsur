import React from "react";
import { GiMicroscope } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "~/components/Button";
import { useNavigate } from "react-router-dom";
import loginOption from "~/constants/options/login.option";
import toast, { Toaster } from "react-hot-toast";
function LoginCard(): JSX.Element {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
    toast.success("Login success");
    console.log("submit");
  };
  return (
    <div className="h-70 w-80">
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className=" bg-white shadow-2xl rounded-lg">
          <h1 className="p-5 border-b text-xl font-semibold bg-violet-500 rounded-t-lg text-center text-white">
            Bienvenida! Pandy Goma
          </h1>
          <div className="flex flex-col items-center justify-center mt-4">
            <label className="block" id="email">
              <span className="font-sans ml-7 text-slate-500">E-mail</span>
              <div className="flex">
                <GiMicroscope className="mt-2 text-xl text-violet-500" />
                <input
                  className="m-2 bg-slate-50 border rounded-lg border-violet-500 hover:border-violet-300 active:bg-violet-400 focus:outline-violet-700"
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
                  className="m-2 bg-slate-50 border rounded-lg border-violet-500 hover:border-violet-300 active:bg-violet-400 focus:outline-violet-700"
                  id="pass"
                  name="pass"
                />
              </div>
            </label>
          </div>
          <div className="p-1">
            <Button btnType={loginOption.btnType} textButton={loginOption.buttonName} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
