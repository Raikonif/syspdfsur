import React, {useEffect} from "react";
import LoginCard from "~/components/LoginCard";
import cells from "~/assets/bg_abstract.jpg";
import bgCells from "~/assets/bg-cells.jpg";
import toast, {Toaster} from "react-hot-toast";
function Login(): JSX.Element {
    useEffect(() => {
        toast.success("Welcome to the app!");
    }, [Toaster]);
  return (
    <div className={"flex h-screen w-full items-center justify-center bg-cover"}>
      <img src={bgCells} className="absolute -z-10 h-screen w-full" alt="..." />
      <LoginCard />
    </div>
  );
}

export default Login;
