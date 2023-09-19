import Datepicker from "react-tailwindcss-datepicker";
import React, { ReactElement } from "react";
import { Dates } from "~/interfaces/Dates.type";

interface IProps {
  value: Dates;
  onChange: (value: any) => void;
  placeholder: string;
  label: string;
  width?: string;
}

function CustomDatepicker({
  value,
  onChange,
  placeholder,
  label,
  width = "w-1/3",
}: IProps): ReactElement {
  return (
    <div className={`${width} m-1 flex flex-col rounded-lg border border-indigo-600 p-2`}>
      <label>
        <span className="text-gray-700">{label}: </span>
      </label>
      <Datepicker
        value={value}
        asSingle={true}
        useRange={false}
        onChange={onChange}
        showShortcuts={true}
        primaryColor={"fuchsia"}
        placeholder={placeholder}
        displayFormat={"DD/MM/YYYY"}
      />
    </div>
  );
}

export default CustomDatepicker;
