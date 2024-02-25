import React from "react";
import { BiPlusMedical } from "react-icons/all";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
interface Props {
  getImage: string;
  getDescription: string;
}

function ImageAndDescription({ getImage, getDescription }: Props) {
  return (
    <div className="col-span-2 flex flex-col">
      <img src={getImage} alt="Lights" className="col-span-2 aspect-auto rounded-md" />
      <div className="col-span-2 my-2">
        <label className="text-gray-700" htmlFor="name">
          <textarea
            className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            id="article-form-content"
            placeholder="Enter your Content"
            defaultValue={getDescription}
            value={getDescription}
            name="comment"
            rows={5}
            cols={40}
          ></textarea>
        </label>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="mx-1 flex">
          <IoIosArrowDropleftCircle size={25} className="text-indigo-600" />
          <p className="mx-1 text-indigo-600">Prev</p>
        </div>
        <div className="ml-1 flex">
          <p className="mx-1 text-indigo-600">Next</p>
          <IoIosArrowDroprightCircle size={25} className="text-indigo-600" />
        </div>
        <button className="flex w-fit rounded-lg border-2 border-slate-400 p-1.5">
          <p className="pr-2 text-slate-500">Add another Slide</p>
          <BiPlusMedical size={30} className="rounded-md bg-indigo-600 p-1.5 text-white" />
        </button>
      </div>
    </div>
  );
}

export default ImageAndDescription;
