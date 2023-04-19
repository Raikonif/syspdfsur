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
  const [isClickedOutside, setIsClickedOutside] = useState<boolean>(false);
  const handleClickOutside = () => {
    setIsClickedOutside(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  return (
    <div className={`${isClickedOutside ? "hidden" : ""}fixed z-30 h-60 w-60`}>
      <label htmlFor={fieldObj.name} className="block text-sm font-medium text-gray-700">
        {fieldObj.placeholder}
      </label>
      <div className="mt-1">
        <input type={fieldObj.type} name={fieldObj.name} id={fieldObj.name} />
      </div>
    </div>
  );
}

export default GeneralField;
