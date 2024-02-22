import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  getImage: string;
  getDescription: string;
}
function ImageAndDescription({ getImage, getDescription }: Props) {
  return (
    <div className="col-span-2">
      <img
        src="https://www.w3schools.com/w3images/lights.jpg"
        alt="Lights"
        className="col-span-2 rounded-md"
      />
      <div className="col-span-2 my-2">
        <label className="text-gray-700" htmlFor="name">
          <textarea
            className="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            id="article-form-content"
            placeholder="Enter your Content"
            name="comment"
            rows={5}
            cols={40}
          ></textarea>
        </label>
      </div>
    </div>
  );
}

export default ImageAndDescription;
