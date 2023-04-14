import React, { useState } from "react";

import IFieldProps from "~/interfaces/fieldInterface";

interface IProps {
  itemFields: IFieldProps[];
  onInputChange: (name: string, value: string) => void;
}
function Fields({ itemFields, onInputChange }: IProps): JSX.Element {
  const [inputValues, setInputValuess] = useState<string[]>(new Array(itemFields.length).fill(""));
  const handleInputChange = (index: number, name: string, value: string) => {
    const newInputValues: string[] = [...inputValues];
    newInputValues[index] = value;
    setInputValuess(newInputValues);
    onInputChange(name, value);
  };

  const listFields: JSX.Element[] = itemFields.map((item: IFieldProps, index: number) => (
    <div className="mb-6 w-80 md:flex md:items-center" key={item.id}>
      <div className="md:w-1/3">
        <label
          className="mb-1 block pr-4 font-bold text-violet-500 md:mb-0 md:text-right"
          id={item.name}
        >
          {item.placeholder}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          id={item.name}
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          name={item.name}
          type={item.type}
          autoComplete="off"
          // placeholder={item.placeholder}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, item.name, e.target.value)}
        />
      </div>
    </div>
  ));
  return <>{listFields}</>;
}

export default Fields;
