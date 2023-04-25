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
    <div className="z-30 flex flex-col">
      <label htmlFor={fieldObj.name} className="block h-8 text-sm font-medium text-gray-500">
        {fieldObj.placeholder}
      </label>
      <div className="rounded-lg border border-fuchsia-600">
        <input type={fieldObj.type} name={fieldObj.name} id={fieldObj.name} />
      </div>
    </div>
  );
}

export default GeneralField;
