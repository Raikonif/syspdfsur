import React, { useEffect, useState } from "react";
import LoginCard from "~/components/LoginCard";
import cells from "~/assets/bg_abstract.jpg";
import bgCells from "~/assets/bg-cells.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
  const navivate = useNavigate();
  useEffect(() => {
    console.log(isAuth);
    if (isAuth) {
      navivate("/patients");
      toast.error("User or Password incorrect!");
    }
  }, [Toaster]);

  return (
    <div className={"flex h-screen w-full items-center justify-center bg-cover"}>
      <img src={bgCells} className="absolute -z-10 h-screen w-full" alt="..." />
      <Toaster />
      <LoginCard auth={() => setIsAuth(isAuth)} />
    </div>
  );
}

export default Login;
