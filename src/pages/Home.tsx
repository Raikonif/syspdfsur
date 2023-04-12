import React from "react";
import GeneralMenu from "~/components/GeneralMenu";
import homeOptions from "~/constants/options/home.options";
import GeneralModal from "~/components/ModalForm/Modal";

function Home(): JSX.Element {
  return (
    <div className="bg-slate-500 h-screen w-full">
      <GeneralMenu itemList={homeOptions.menuOptions} />
      <GeneralModal />
    </div>
  );
}

export default Home;
