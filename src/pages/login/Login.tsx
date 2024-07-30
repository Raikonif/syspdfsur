import React, { useEffect, useState } from "react";
import LoginCard from "~/components/LoginCard";
import cellsRounded from "~/assets/abstractCells.jpg";
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
  }, [isAuth]);

  const handleSubmitLoginCard = (data: ILoginProps) => {
    if (data.email !== "" && data.password !== "") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      toast.error("User or Password incorrect!");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Toaster />
      <LoginCard onSubmit={handleSubmitLoginCard} />
    </div>
  );
}

export default Login;
