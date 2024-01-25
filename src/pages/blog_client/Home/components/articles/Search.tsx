import React from "react";
import { useTranslation } from "react-i18next";
import { BsFillSearchHeartFill } from "react-icons/bs";

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

function Search({ search, setSearch }: SearchProps) {
  const { t } = useTranslation();
  return (
    <div className="flex w-11/12 items-center justify-between rounded-lg bg-violet-600 sm:mx-2 sm:mt-5 sm:w-full">
      <input
        className="h-full w-full rounded-l-md border p-3 text-white focus:outline-none dark:border-slate-500 dark:bg-slate-600 dark:text-white"
        type="text"
        placeholder={t("SEARCH")}
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
