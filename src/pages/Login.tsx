import React from "react";
import LoginCard from "~/components/LoginCard";
import cells from "~/assets/bg_abstract.jpg";
import bgCells from "~/assets/bg-cells.jpg";
function Login(): JSX.Element {
  return (
    <div className={"flex justify-center items-center h-screen w-full bg-cover"}>
      <img src={bgCells} className="absolute -z-10 h-screen w-full" alt="..." />
      <LoginCard />
    </div>
  );
}

export default Login;
