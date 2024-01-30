import React, { useEffect } from "react";
import { ALL, CITHOLOGY, HISTOPATHOLOGY, PAP } from "~/constants/Blog/blog.constants";
interface FilterProps {
  selected: string;
  setSelected: (value: string) => void;
}

function Filter({ selected, setSelected }: FilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="my-6 flex items-center justify-center sm:my-4 sm:mt-8">
      <div className="m-1 flex items-center gap-x-1 px-2">
        <input
          id="all"
          name="filters"
          type="radio"
          checked={selected === ALL}
          onChange={handleChange}
          className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-indigo-600"
          value={ALL}
        />
        <label
          htmlFor="all"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          All
        </label>
      </div>
      <div className="flex items-center gap-x-1 px-2">
        <input
          id="paps"
          name="filters"
          type="radio"
          checked={selected === PAP}
          onChange={handleChange}
          className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-indigo-600"
          value={PAP}
        />
        <label
          htmlFor="paps"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          Paps
        </label>
      </div>
      <div className="flex items-center gap-x-1 px-2">
        <input
          id="cithology"
          name="filters"
          type="radio"
          checked={selected === CITHOLOGY}
          onChange={handleChange}
          className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-indigo-600"
          value={CITHOLOGY}
        />
        <label
          htmlFor="cithology"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          Cithology
        </label>
      </div>
      <div className="flex items-center gap-x-1 px-2">
        <input
          id="histopathology"
          name="filters"
          type="radio"
          checked={selected === HISTOPATHOLOGY}
          onChange={handleChange}
          className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-indigo-600"
          value={HISTOPATHOLOGY}
        />
        <label
          htmlFor="histopathology"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
        >
          Histopathology
        </label>
      </div>
    </div>
  );
}

export default Filter;
