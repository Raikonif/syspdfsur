import React from "react";
import GeneralMenu from "~/components/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import GeneralModal from "~/components/ModalForm/Modal";
import PatientCard from "~/components/PatientCard";

function Home(): JSX.Element {
  return (
    <div className="flex bg-slate-500 h-screen w-full">
      <GeneralMenu itemList={homeOptions.menuOptions} />
      <div className=" h-auto justify-between grid grid-cols-3 gap-6 m-10 mb-10">
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
        <PatientCard />
      </div>
      {/*<GeneralModal />*/}
    </div>
  );
}

export default Home;
