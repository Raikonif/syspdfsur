import React, { useEffect, useState } from "react";
import GeneralMenu from "~/components/menu/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import GeneralModal from "~/components/modal/Modal";
import PatientCard from "~/components/PatientCard";
import Patients from "~/pages/Patients";
import Button from "~/components/Button";
import { BsFillSearchHeartFill } from "react-icons/all";
import Header from "~/components/menu/Header";
import SearchButton from "~/components/menu/search/SearchButton";

function Home(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
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
        mobileMode ? "flex h-screen w-full flex-col bg-white" : "flex h-screen w-full bg-white"
      }`}
    >
      <SearchButton isMobileMode={mobileMode} />
      <GeneralMenu itemList={homeOptions.menuOptions} isMobileMode={mobileMode} />
      <div className="flex w-screen flex-col">
        <div className="flex">
          <Header />
        </div>
        {currentPage && <Patients />}
      </div>
      {/*<GeneralModal />*/}
    </div>
  );
}

export default Home;
