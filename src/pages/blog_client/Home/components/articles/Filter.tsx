import React from "react";
import { ALL, CITHOLOGY, HISTOPATHOLOGY, PAP } from "~/constants/Blog/blog.constants";
interface FilterProps {
  selected: string;
  setSelected: (value: string) => void;
}

function Filter({ selected, setSelected }: FilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="m-1 mt-3 w-full justify-center p-3 sm:mt-6">
      <select
        name="study"
        id="study-select"
        className=" grid w-full grid-cols-3 items-center justify-between rounded-lg border p-3 font-[Arial] text-sm font-semibold text-violet-600 md:px-10"
        onChange={handleChange}
        value={selected}
      >
        <option value={ALL} className="w-auto font-[Arial] text-sm font-semibold text-violet-600">
          ALL
        </option>
        <option value={"PAP"} className="w-auto font-[Arial] text-sm font-semibold text-violet-600">
          PAPS
        </option>
        <option
          value={CITHOLOGY}
          className="w-auto font-[Arial] text-sm font-semibold text-violet-600"
        >
          CITHOLOGY
        </option>
        <option
          value={HISTOPATHOLOGY}
          className="w-auto font-[Arial] text-sm font-semibold text-violet-600"
        >
          HISTOPATHOLOGY
        </option>
        {/* <div>
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="PAPS"
          />
          <label className="text-white font-[Arial] font-bold">PAPS</label>
        </div>
        <div>
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="CITHOLOGY"
          />
          <label className="text-white font-[Arial] font-bold">CITO</label>
        </div>
        <div>
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="HISTOLOGY"
          />
          <label className="text-white font-[Arial] font-bold">HISTO</label>
        </div>
        <div className="flex items-center w-full justify-center grid-col-span-3">
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="ALL"
          />
          <label className="text-white font-[Arial] font-bold w-full">
            TODOS
          </label>
        </div> */}
      </select>
    </div>
  );
}

export default Filter;
