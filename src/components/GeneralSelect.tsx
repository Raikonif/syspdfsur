import React, { ReactElement, useEffect, useState } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Outlet } from "react-router-dom";

interface IProps<T> {
  data: T[];
  option: (m: T) => void;
  defaultOption?: T;
}
function GeneralSelect<T>({ data, option, defaultOption }: IProps<T>): ReactElement {
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<T>(defaultOption as T);
  const [open, setOpen] = useState<boolean>(false);
  const handleClear = () => {
    setSelected(defaultOption as T);
  };
  const handleSelect = (who: T) => {
    setSelected(who);
    setOpen(false);
    option(who);
  };
  useEffect(() => {
    handleSelect(selected);
    console.log("selected", selected);
  }, [selected]);
  return (
    <div className="h-80 w-full font-medium">
      <div className="flex items-center justify-center rounded-lg border-2 shadow-md ">
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleClear();
            event.stopPropagation();
          }}
        >
          <AiFillCloseCircle
            size={20}
            className="mx-2 text-pink-500 hover:text-pink-400 active:text-pink-600"
          />
        </button>
        <div
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center justify-between rounded bg-white p-2 ${
            !selected && "text-gray-700"
          }`}
        >
          {selected && <Outlet />}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
      </div>
      <ul className={`mt-2 overflow-y-auto bg-white ${open ? "max-h-60" : "max-h-0"} `}>
        <div className="sticky top-0 flex items-center bg-white px-2">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Medic Name"
            className="p-2 outline-none placeholder:text-gray-700"
          />
        </div>
        {<Outlet />}
      </ul>
    </div>
  );
}

export default GeneralSelect;
