import React, { useState } from "react";

import IFieldProps from "~/interfaces/fieldInterface";

interface IProps {
  itemFields: IFieldProps[];
}
function Fields({ itemFields }: IProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string[]>(new Array(itemFields.length));
  const handleInputChange = (index: number, value: string) => {
    const newInputValues: string[] = [...inputValue];
    newInputValues[index] = value;
    setInputValue(newInputValues);
  };

  const listFields: JSX.Element[] = itemFields.map((item: IFieldProps, index: number) => (
    // <label className="relative cursor-pointer" id={item.name} key={item.id}>
    //   <input
    //     name={item.name}
    //     type={item.type}
    //     placeholder={item.placeholder}
    //     className=" m-2 h-[60px] w-full px-6 text-2xl text-violet-500 border-violet-500 border-2 rounded-lg border-opacity-50 outline-none focus:border-violet-600 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
    //   />
    //   <span className="text-2xl text-violet-500 text-opacity-80 absolute left-5 top-5 px-1 transition duration-200 input-text">
    //     {item.placeholder}
    //   </span>
    // </label>
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
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      </div>
    </div>
  ));
  return <>{listFields}</>;
}

export default Fields;
