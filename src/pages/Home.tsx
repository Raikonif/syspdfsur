import React, { useEffect, useState } from "react";
import GeneralMenu from "~/components/menu/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import GeneralModal from "~/components/modal/Modal";
import PatientCard from "~/components/PatientCard";
import Patients from "~/pages/Patients";
import Button from "~/components/Button";

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
      <GeneralMenu itemList={homeOptions.menuOptions} isMobileMode={mobileMode} />
      {currentPage && <Patients />}
      {/*<GeneralModal />*/}
    </div>
  );
}

export default Home;
