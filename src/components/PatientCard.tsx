import React, { useEffect, useState } from "react";

function PatientCard(): JSX.Element {
  const [textColorTitle, setTextColorTitle] = useState<string>("text-fuchsia-600");
  const [textColorDescription, setTextColorDescription] = useState<string>("text-gray-500");
  const [textColorDate, setTextColorDate] = useState<string>("text-gray-300");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // useEffect(() => {
  //   if (isClicked){}
  // }, [textColorTitle, textColorDescription, textColorDate]);
  const handleTextColor = () => {
    setTextColorTitle("text-gray-600");
    setTimeout(() => {
      setTextColorTitle("text-fuchsia-600");
    }, 1500);
    setTextColorDescription(
      textColorDescription === "text-gray-500" ? "text-gray-400" : "text-gray-500",
    );
    setTextColorDate(textColorDate === "text-gray-300" ? "text-gray-200" : "text-gray-300");
    // set color default again
    setTextColorTitle("text-fuchsia-600");
    setTextColorDescription("text-gray-500");
    setTextColorDate("text-gray-300");
  };
  return (
    <div className="duration-300 hover:scale-110" onClick={handleTextColor}>
      <article className="container rounded-2xl bg-white p-5 shadow-2xl">
        <h1 className={`font-bold ${textColorTitle}`}>Patient Card</h1>
        <p className="font-light text-gray-500 active:text-gray-400">This is a Description</p>
        <h6 className="mb-5 text-sm text-gray-300 active:text-gray-200">Date 12/04/2023</h6>
      </article>
    </div>
  );
}

export default PatientCard;
