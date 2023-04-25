import React, { useEffect, useState } from "react";

interface IField {
  name: string;
  id: number;
  type: string;
  value: string;
  placeholder: string;
}
interface IProps {
  fieldObj: IField;
}
function GeneralField({ fieldObj }: IProps): JSX.Element {
  return (
    <div className="z-30 flex w-full flex-col p-2 pt-7">
      {/*<label htmlFor={fieldObj.name} className="block h-8 text-sm font-medium text-gray-500">*/}
      {/*  {fieldObj.placeholder}*/}
      {/*</label>*/}
      <input
        type={fieldObj.type}
        name={fieldObj.name}
        id={fieldObj.name}
        placeholder={fieldObj.placeholder}
        className="text- w-full appearance-none border-b-2 pb-1 font-sans focus:border-fuchsia-600 focus:outline-none focus:ring-0"
      />
    </div>
  );
}

export default GeneralField;
