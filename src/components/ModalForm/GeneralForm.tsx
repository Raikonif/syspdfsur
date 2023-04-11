import React from "react";
import Button from "~/components/Button";
import modalOptions from "~/constants/options/modal.options";
import Fields from "~/components/ModalForm/Fields";

function GeneralForm(): JSX.Element {
  return (
    <form>
      <div className="flex flex-col justify-center items-center">
        <h1>First Part Form</h1>
        <Fields itemFields={modalOptions.fields} />
        <div>
          <Button textButton={modalOptions.buttonName} btnType={modalOptions.btnType} />
        </div>
      </div>
    </form>
  );
}

export default GeneralForm;
