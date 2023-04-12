import React from "react";
import Button from "~/components/Button";
import loginOption from "~/constants/options/login.option";
import GeneralForm from "~/components/ModalForm/GeneralForm";

function GeneralModal(): JSX.Element {
  return (
    <div className="flex bg-slate-500 justify-center items-center">
      <div className="bg-white rounded-xl w-auto p-10 opacity-100">
        <GeneralForm />
      </div>
    </div>
  );
}

export default GeneralModal;
