import React from "react";
import Button from "~/components/Button";
import modalOptions from "~/constants/options/modal.options";
import Field from "~/components/ModalForm/Field";

function GeneralForm(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>First Part Form</h1>
      <Field itemFields={modalOptions.fields} />
      <div>
        <Button textButton={modalOptions.buttonName} btnType={modalOptions.btnType} />
      </div>
    </div>
  );
}

export default GeneralForm;
