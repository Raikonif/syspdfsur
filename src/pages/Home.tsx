import React, { useState } from "react";
import GeneralMenu from "~/components/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import GeneralModal from "~/components/ModalForm/Modal";
import PatientCard from "~/components/PatientCard";
import Patients from "~/pages/Patients";
import Button from "~/components/Button";

function Home(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("patients");
  const handleMenuPages = () => {
    setCurrentPage("patients");
  };
  return (
    <div className="flex h-screen w-full bg-slate-500">
      <GeneralMenu itemList={homeOptions.menuOptions} />
      {currentPage && <Patients />}
      {/*<GeneralModal />*/}
    </div>
  );
}

export default Home;
