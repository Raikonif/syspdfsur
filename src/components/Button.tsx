import React from "react";

type BtnType = "button" | "submit" | "reset";
interface IProps {
  textButton: string;
  action?: () => void;
  btnType: BtnType;
}
function Button({ btnType, textButton, action }: IProps): JSX.Element {
  return (
    <button
      type={btnType}
      className="bg-violet-500 rounded-md p-2 active:bg-violet-400 hover:bg-violet-600 focus:outline-none"
      onClick={action}
    >
      <h1 className="text-white font-semibold">{textButton}</h1>
    </button>
  );
}

export default Button;
