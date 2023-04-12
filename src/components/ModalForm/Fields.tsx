import React, { useState } from "react";

import IFieldProps from "~/interfaces/fieldInterface";

interface IProps {
  itemFields: IFieldProps[];
  onInputChange: (name: string, value: string) => void;
}
function Fields({ itemFields, onInputChange }: IProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string[]>(new Array(itemFields.length).fill(""));
  const handleInputChange = (index: number, name: string, value: string) => {
    const newInputValues: string[] = [...inputValue];
    newInputValues[index] = value;
    setInputValue(newInputValues);
    onInputChange(name, value);
  };

  const listFields: JSX.Element[] = itemFields.map((item: IFieldProps, index: number) => (
    <div className="md:flex md:items-center mb-6 w-80" key={item.id}>
      <div className="md:w-1/3">
        <label
          className="block text-violet-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          id={item.name}
        >
          {item.placeholder}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          id={item.name}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          name={item.name}
          type={item.type}
          // placeholder={item.placeholder}
          value={inputValue[index]}
          onChange={(e) => handleInputChange(index, item.name, e.target.value)}
        />
      </div>
    </div>
  ));
  return <>{listFields}</>;
}

export default Fields;
