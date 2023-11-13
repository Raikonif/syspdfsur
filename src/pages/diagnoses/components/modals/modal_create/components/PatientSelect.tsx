import React, { ReactElement, useState, useEffect } from "react";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Patient from "~/interfaces/Patient.type";
import { BsPersonPlusFill } from "react-icons/all";
import { IReportForm } from "../../../../../../interfaces/Report.type";

interface IProps {
  data: Patient[];
  report: IReportForm;
  option: (m: IReportForm) => void;
}

function PatientSelect({ data, option, report }: IProps): ReactElement {
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<Patient>({
    id: 0,
    first_name: "Select - Patient *",
    last_name: "",
    gender: "",
    age: "",
    dni: "",
  } as Patient);
  const [open, setOpen] = useState<boolean>(false);
  const handleClear = () => {
    setSelected({
      id: 0,
      first_name: "Select - Patient *",
      last_name: "",
      gender: "",
      age: "",
      dni: "",
    });
  };
  const handleSearch = (inputValue: string) => {
    if (!open) {
      setInputValue("");
    } else {
      setInputValue(inputValue);
    }
  };
  const handleSelect = (patient: Patient) => {
    setSelected(patient);
    setOpen(false);
    option({ ...report, patient_id: patient.id });
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
            className={`${
              Number(selected.gender) === 0
                ? "text-pink-500 hover:text-pink-400 active:text-pink-600"
                : "text-blue-500 hover:text-blue-400 active:text-blue-600"
            } mx-2`}
          />
        </button>
        <div
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center justify-between rounded bg-white p-2 ${
            !selected && "text-gray-700"
          }`}
        >
          {selected && selected.first_name + " " + selected.last_name}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <button className="m-2 rounded-lg border border-indigo-600 bg-indigo-200 p-1 text-indigo-600">
          <BsPersonPlusFill size={30} />
        </button>
      </div>
      <ul
        className={`mt-2 block overflow-y-auto bg-white duration-300 ${
          open ? "max-h-60" : "hidden"
        } `}
      >
        <div className="sticky top-0 flex items-center bg-white px-2">
          <AiOutlineSearch size={20} className="mx-1 text-violet-600" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Patient Name or Lastname"
            className="w-full rounded-lg border-2 p-2 shadow-md outline-none placeholder:text-violet-700"
          />
        </div>
        {data?.map((patient: Patient) => (
          <li
            key={patient.id}
            className={`z-20 p-2 text-sm hover:bg-fuchsia-600 hover:text-white
            ${
              (patient.first_name.toLowerCase() === selected.first_name.toLowerCase() ||
                patient.last_name.toLowerCase() === selected.last_name.toLowerCase()) &&
              "bg-fuchsia-600 text-white"
            }
            
            ${
              patient.first_name.toLowerCase().startsWith(inputValue) ||
              patient.last_name.toLowerCase().startsWith(inputValue)
                ? "z-20 block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                patient.first_name.toLowerCase() !== selected.first_name.toLowerCase() ||
                patient.last_name.toLowerCase() !== selected.last_name.toLowerCase()
              ) {
                setSelected(patient);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {patient.first_name + " " + patient.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientSelect;
