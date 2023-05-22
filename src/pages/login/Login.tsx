import React, { useEffect, useState } from "react";
import LoginCard from "~/components/LoginCard";
import cellsRounded from "~/assets/abstractCells.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ILoginProps from "~/interfaces/loginInterface";
import { useAuth } from "~/pages/login/context/AuthContext";

function Login(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  // const { user, setUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const logout = (event: any) => {
    event.preventDefault();
    // setUser({} as ILoginProps);
    // setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/patients");
    }
  }, [isAuth]);

  const handleSubmitLoginCard = (data: ILoginProps) => {
    if (data.email !== "" && data.password !== "") {
      setIsAuth(true);
      // setUser(data);
      // setIsLoggedIn(true);
      // console.log("isLoggedIn", isLoggedIn);
      // console.log("user", user);
      // console.log("data", data);
    } else {
      setIsAuth(false);
      toast.error("User or Password incorrect!");
      // setIsLoggedIn(false);
    }
  };

  return (
    <div className={"flex h-screen w-full items-center justify-center bg-cover"}>
      <img src={cellsRounded} className="absolute -z-10 h-screen w-full" alt="..." />
      <Toaster />
      <LoginCard onSubmit={handleSubmitLoginCard} />
    </div>
  );
}

export default Login;
