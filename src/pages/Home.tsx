import React from "react";
import GeneralMenu from "~/components/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
interface IHomeProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}

function Home(): JSX.Element {
  return (
    <div className="bg-emerald-700 h-screen w-full">
      <GeneralMenu itemList={homeOptions.menuOptions} />
    </div>
  );
}

export default Home;
