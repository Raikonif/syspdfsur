import React, { useState } from "react";
import GeneralButton from "~/components/GeneralButton";
import modalOptions from "~/constants/options/modal.options";
import Fields from "~/components/modal/Fields";

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
      <div className="flex flex-col items-center justify-center ">
        <div className="pb-4">
          <h1>Form Example</h1>
        </div>
        <div>
          <Fields itemFields={modalOptions.fields} onInputChange={handleInputChange} />
        </div>
        <div>
          <GeneralButton textButton={modalOptions.buttonName} btnType={modalOptions.btnType} />
        </div>
      </div>
    </form>
  );
}

export default GeneralForm;
