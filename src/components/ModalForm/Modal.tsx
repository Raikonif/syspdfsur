import React from "react";
import Button from "~/components/Button";
import loginOption from "~/constants/options/login.option";
import GeneralForm from "~/components/ModalForm/GeneralForm";

function GeneralModal(): JSX.Element {
  return (
    <div className="flex items-center justify-center bg-slate-500">
      <div className="w-auto rounded-xl bg-white p-10 opacity-100">
        <GeneralForm />
      </div>
    </div>
  );
}

export default GeneralModal;
