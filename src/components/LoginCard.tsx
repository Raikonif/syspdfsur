import React, { useState } from "react";
import { GiMicroscope } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import GeneralButton from "~/components/GeneralButton";
import { useNavigate } from "react-router-dom";
import loginOption from "~/constants/options/login.option";
import toast from "react-hot-toast";
import ILoginProps from "~/interfaces/loginInterface";
interface IProps {
  onSubmit: (data: ILoginProps) => void;
}
function LoginCard({ onSubmit }: IProps): JSX.Element {
  const [data, setData] = useState<ILoginProps>({
    email: "",
    password: "",
  });
  const [isLogged, setIsLogged] = useState<boolean>(false);
  // const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <div className="h-70 w-80">
      <form onSubmit={handleSubmit}>
        <div className=" rounded-lg bg-white shadow-2xl">
          <h1 className="rounded-t-lg border-b bg-violet-500 p-5 text-center text-xl font-semibold text-white">
            Bienvenida! Pandy Goma
          </h1>
          <div className="mt-4 flex flex-col items-center justify-center">
            <label className="block" id="email">
              <span className="ml-7 font-sans text-slate-500">E-mail</span>
              <div className="flex">
                <GiMicroscope className="mt-2 text-xl text-violet-500" />
                <input
                  className="m-2 rounded-lg border border-violet-500 bg-slate-50 hover:border-violet-300 focus:outline-violet-700 active:bg-violet-400"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={(event) => setData({ ...data, email: event.target.value })}
                />
              </div>
            </label>
            <label className="block" id="pass">
              <span className="ml-7 font-sans text-slate-500">Password</span>
              <div className="flex">
                <RiLockPasswordFill className="mt-2 text-xl text-violet-500" />
                <input
                  className="m-2 rounded-lg border border-violet-500 bg-slate-50 hover:border-violet-300 focus:outline-violet-700 active:bg-violet-400"
                  id="pass"
                  name="pass"
                  value={data.password}
                  onChange={(event) => setData({ ...data, password: event.target.value })}
                />
              </div>
            </label>
          </div>
          <div className="p-1">
            <GeneralButton btnType={loginOption.btnType} textButton={loginOption.buttonName} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
