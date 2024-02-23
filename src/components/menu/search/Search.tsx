import React from "react";
import { BsFillSearchHeartFill } from "react-icons/all";

function Search() {
  return (
    <div className="mb-3 w-fit sm:w-full">
      <div className="relative  flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="focus:border-primary dark:focus:border-primary relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(192,38,211)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />

        {/* <!--Search icon--> */}
        <BsFillSearchHeartFill size={30} className="mx-3 text-fuchsia-600" />
      </div>
    </div>
  );
}

export default Search;
