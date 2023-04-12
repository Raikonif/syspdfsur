import React, { useState } from "react";
import Button from "~/components/Button";
import modalOptions from "~/constants/options/modal.options";
import Fields from "~/components/ModalForm/Fields";

function GeneralForm(): JSX.Element {
  const [submitData, setSubmitData] = useState<object>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    console.log(submitData);
  };
  const handleInputChange = (name: string, value: string) => {
    setSubmitData((prevState: object) => ({ ...prevState, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <h1>First Part Form</h1>
        <Fields itemFields={modalOptions.fields} onInputChange={handleInputChange} />
        <div>
          <Button textButton={modalOptions.buttonName} btnType={modalOptions.btnType} />
        </div>
      </div>
    </form>
  );
}

export default GeneralForm;
