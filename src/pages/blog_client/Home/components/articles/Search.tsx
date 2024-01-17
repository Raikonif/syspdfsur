import React from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="mx-2 flex w-4/5 items-center justify-between rounded-lg bg-violet-600 sm:mt-5 sm:w-full">
      <input
        className="h-full w-full rounded-l-md border p-3 focus:outline-none"
        type="text"
        placeholder="Search"
        aria-autocomplete="none"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="flex h-full w-1/4 justify-center rounded-md rounded-l-none bg-violet-600 text-white">
        <BsFillSearchHeartFill size={24} />
      </button>
    </div>
  );
}

export default Search;
