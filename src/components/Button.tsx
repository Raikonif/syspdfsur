import React from "react";

type BtnType = "button" | "submit" | "reset";
interface IProps {
  textButton: string;
  action?: () => void;
  btnType: BtnType;
}
function Button({ btnType, textButton, action }: IProps): JSX.Element {
  return (
    <button type={btnType} className="btn min-w-full" onClick={action}>
      <h1 className="font-semibold text-white">{textButton}</h1>
    </button>
  );
}

export default Button;
