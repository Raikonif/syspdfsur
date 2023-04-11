import React from "react";
import Button from "~/components/Button";
import loginOption from "~/constants/options/login.option";
import GeneralForm from "~/components/ModalForm/GeneralForm";

function GeneralModal(): JSX.Element {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex justify-center bg-black items-center inset-0">
        <div className="fixed inset-0 bg-slate-300 justify-center items-center h-5/6 w-3/4 rounded-lg">
          <GeneralForm />
          {/*<Button btnType={loginOption.btnType} textButton={loginOption.buttonName} />*/}
        </div>
      </div>
    </div>
  );
}

export default GeneralModal;
