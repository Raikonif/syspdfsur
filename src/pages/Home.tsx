import React, { useEffect, useState } from "react";
import GeneralMenu from "~/components/menu/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import GeneralModal from "~/components/modal/Modal";
import PatientCard from "~/components/PatientCard";
import Patients from "~/pages/Patients";
import Button from "~/components/Button";
import SearchField from "~/components/menu/SearchField";
import ButtonMenu from "~/components/menu/ButtonMenu";
import { BsFillSearchHeartFill } from "react-icons/all";

function Home(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("patients");
  const [mobileMode, setMobileMode] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const handleMenuPages = () => {
    setCurrentPage("patients");
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
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
      <div className="flex flex-col">
        <ButtonMenu
          handleClick={handleSearch}
          iconType={<BsFillSearchHeartFill className="flex h-7 w-8 justify-end text-fuchsia-600" />}
        />
        {showSearch && <SearchField />}

        {currentPage && <Patients />}
      </div>
      {/*<GeneralModal />*/}
    </div>
  );
}

export default Home;
