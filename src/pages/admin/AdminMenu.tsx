import React from "react";
import { FaHamburger } from "react-icons/all";

function AdminMenu() {
  return (
    <div className="">
      <FaHamburger className="flex lg:hidden" onClick={() => console.log("Open Hamburger")} />
      <div>
        <img src={""} className="m-1 h-10 w-10 p-1" alt="profile" />
        <div>Nandy Calle</div>
        <div>Admin</div>
      </div>
      <div className="flex flex-col">
        <div>Cases</div>
        <div>Cases</div>
      </div>
    </div>
  );
}
