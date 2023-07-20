import React, { ReactElement, useState } from "react";
import Medic from "~/interfaces/Medic.type";

interface IProps {
  data: Medic[];
}
function MedicSelect({ data }: IProps): ReactElement {
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState<Medic>({} as Medic);
  // const [medics, setMedics] = useState<Medic[]>([]);
  const medics: Medic[] = data;
  const indexStr = Number("-1");
  const selectAndClose = (medic: Medic) => {
    setSelected(medic);
    setOpenSelect(false);
  };
  return (
    <div className="flex flex-col">
      <label id="listbox-label" className="font-medium">
        Assigned to:
      </label>
      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:bg-indigo-500 focus:text-white focus:outline-none sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => setOpenSelect(!openSelect)}
        >
          <span className="flex items-center">
            <img src="https://placeimg.com/20/20/animals" alt="..." />
            <span className="ml-3 block truncate">{selected.first_name}</span>
            <span className="ml-1 block truncate">{selected.last_name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {openSelect && (
          <ul
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabIndex={indexStr}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {medics.map((medic: Medic) => (
              <li
                className="relative cursor-default select-none py-2 pl-3 text-gray-900 hover:bg-indigo-500 hover:text-white"
                key={medic.id}
              >
                <div
                  className="flex items-center"
                  onClick={() => {
                    selectAndClose(medic);
                  }}
                >
                  <img src="https://placeimg.com/20/20/animals" alt="..." />
                  <span className="ml-3 block truncate font-normal">{medic.first_name}</span>
                  <span className="ml-1 block truncate">{medic.last_name}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MedicSelect;
