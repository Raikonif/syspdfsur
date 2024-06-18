import React from "react";
import { FaHamburger } from "react-icons/all";
import { Divider } from "@nextui-org/react";

function AdminMenu() {
  return (
    <div className="w-[200px] rounded-r-md bg-fuchsia-600 tracking-tighter">
      <FaHamburger className="flex lg:hidden" onClick={() => console.log("Open Hamburger")} />
      <div className="p-2 text-center text-fuchsia-50">
        <div className="flex w-full justify-center">
          <img
            src={""}
            className="m-1 h-20 w-20 rounded-full border-2 border-fuchsia-50 bg-fuchsia-50 p-1"
            alt="profile"
          />
        </div>
        <div className="text-2xl">Nandy Calle</div>
        <div>Admin</div>
      </div>
      <div className="flex flex-col">
        <Divider />
        <div className="py-5 pl-6 text-xl tracking-wide text-fuchsia-50">Cases</div>
        <Divider />
        <div className="py-5 pl-6 text-xl tracking-wide text-fuchsia-50">Cases</div>
        <Divider />
      </div>
    </div>
  );
}

export default AdminMenu;
