import React from "react";
import { GiHamburgerMenu } from "react-icons/all";

interface IProps {
  handleClick: () => void;
  iconType: JSX.Element;
}
function ButtonMenu({ iconType, handleClick }: IProps): JSX.Element {
  return (
    <div>
      <button
        className="text-white duration-300 hover:scale-105 active:text-fuchsia-300"
        onClick={handleClick}
      >
        <div>{iconType}</div>
      </button>
    </div>
  );
}

export default ButtonMenu;
