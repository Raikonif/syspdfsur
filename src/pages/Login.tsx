import React, { useEffect, useState } from "react";
import LoginCard from "~/components/LoginCard";
import bgCells from "~/assets/bg-cells.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ILoginProps from "~/interfaces/loginInterface";

function Login(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/patients");
    }
  }, [Toaster]);

  const handleSubmitLoginCard = (data: ILoginProps) => {
    if (data.email === "raikonif@gmail.com" && data.password === "admin") {
      setIsAuth(true);
      toast.success("Welcome!");
    } else {
      setIsAuth(false);
      toast.error("User or Password incorrect!");
    }
  };

  return (
    <div className={"flex h-screen w-full items-center justify-center bg-cover"}>
      <img src={bgCells} className="absolute -z-10 h-screen w-full" alt="..." />
      <Toaster />
      <LoginCard onSubmit={handleSubmitLoginCard} />
    </div>
  );
}

export default Login;
