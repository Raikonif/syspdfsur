import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import Medic from "~/interfaces/Medic.type";
import { FaHandHoldingMedical } from "react-icons/all";
import { IReportForm } from "~/interfaces/Report.type";

interface IProps {
  data: Medic[];
  option: (m: IReportForm) => void;
  report: IReportForm;
}

function MedicSelect({ data, option, report }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<Medic>({
    id: 0,
    first_name: "Select",
    last_name: "",
    specialty: "Medic *",
  } as Medic);
  const [open, setOpen] = useState<boolean>(false);

  const handleClear = () => {
    setSelected({
      id: 0,
      first_name: "Select",
      last_name: "",
      specialty: "Medic *",
    });
  };
  const handleSearch = (inputValue: string) => {
    if (!open) {
      setInputValue("");
    } else {
      setInputValue(inputValue);
    }
  };
  const handleSelect = (medic: Medic) => {
    setSelected(medic);
    setOpen(false);
    option({ ...report, medic_id: medic.id });
  };

  useEffect(() => {
    handleSelect(selected);
    console.log("selected", selected);
  }, [selected]);

  useEffect(() => {
    handleSearch(inputValue);
  }, [open]);

  return (
    <div className="h-auto w-full">
      <div className="flex items-center justify-center rounded-lg border border-indigo-600 shadow-md ">
        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            handleClear();
            event.stopPropagation();
          }}
        >
          <AiFillCloseCircle
            size={20}
            className="mx-2 text-indigo-600 hover:text-indigo-400 active:text-indigo-700"
          />
        </button>
        <div
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center justify-between rounded bg-white p-2 ${
            !selected && "text-gray-700"
          }`}
        >
          {selected && selected.first_name + " " + selected.last_name + " - " + selected.specialty}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <button className="m-2 rounded-lg border border-indigo-600 bg-indigo-200 p-1 text-indigo-600">
          <FaHandHoldingMedical size={30} />
        </button>
      </div>
      <ul className={`mt-2 overflow-y-auto bg-white ${open ? "max-h-60" : "peer hidden"} `}>
        <div className="sticky top-0 flex items-center bg-white px-2">
          <AiOutlineSearch size={20} className="text-violet-600" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Medic Name"
            className="p-2 outline-none placeholder:font-sans placeholder:text-violet-700"
          />
        </div>
        {data?.map((medic: Medic) => (
          <li
            key={medic.id}
            className={`p-2 text-sm hover:bg-fuchsia-600 hover:text-white
            ${
              (medic.first_name.toLowerCase() === selected.first_name.toLowerCase() ||
                medic.last_name.toLowerCase() === selected.last_name.toLowerCase()) &&
              "bg-fuchsia-600 text-white"
            }
            
            ${
              medic.first_name.toLowerCase().startsWith(inputValue) ||
              medic.last_name.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                medic.first_name.toLowerCase() !== selected.first_name.toLowerCase() ||
                medic.last_name.toLowerCase() !== selected.last_name.toLowerCase()
              ) {
                setSelected(medic);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {medic.first_name + " " + medic.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicSelect;
