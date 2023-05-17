import React, { useContext, useEffect, useState } from "react";
import LoginCard from "~/components/LoginCard";
import bgCells from "~/assets/bg-cells.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ILoginProps from "~/interfaces/loginInterface";
import { useAuth } from "~/pages/login/context/AuthContext";
// import useAuth from "~/pages/login/context/useAuth";

function Login(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const login = (event: any) => {
    event.preventDefault();
    if (setUser) {
      setUser({
        id: 1,
        email: "raikonif@gmail.com",
        password: "admin",
      });
    }
    setIsLoggedIn(true);
  };
  const logout = (event: any) => {
    event.preventDefault();
    setUser!({} as IUser);
    setIsLoggedIn!(false);
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/patients");
    }
  }, [isAuth]);

  const handleSubmitLoginCard = (data: ILoginProps) => {
    if (data.email === "raikonif@gmail.com" && data.password === "admin") {
      setIsAuth(true);
      setUser(data);
      setIsLoggedIn(true);
    } else {
      setIsAuth(false);
      toast.error("User or Password incorrect!");
      setIsLoggedIn(false);
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
