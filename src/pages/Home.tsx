import React, { useEffect, useState } from "react";
import GeneralMenu from "~/components/menu/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import Patients from "~/pages/patients/Patients";
import Header from "~/components/menu/Header";
import SearchButton from "~/components/menu/search/SearchButton";

function Home(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<string>("patients");
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  const handleMenuPages = () => {
    setCurrentPage("patients");
  };

  useEffect(() => {
    const handleMobileMode = () => {
      if (window.innerWidth < 640) {
        setMobileMode(true);
        console.log("false");
      } else {
        setMobileMode(false);
        console.log("true");
      }
    };
    window.addEventListener("resize", handleMobileMode);
    return () => {
      window.removeEventListener("resize", handleMobileMode);
    };
  }, []);

  return (
    <div
      className={`${
        mobileMode ? "flex h-screen w-full flex-col bg-white" : "flex h-screen w-screen bg-white"
      }`}
    >
      <SearchButton isMobileMode={mobileMode} />
      <div className="w-40">
        <GeneralMenu itemList={homeOptions.menuOptions} isMobileMode={mobileMode} />
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex">
          <Header />
        </div>
        {currentPage && <Patients />}
      </div>
    </div>
  );
}

export default Home;
