import React from "react";
import { FaHamburger } from "react-icons/all";
import { Divider } from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import homeOptions from "~/constants/options/home.options";

function AdminMenu() {
  return (
    <div className="h-screen w-[200px] rounded-r-md bg-fuchsia-600 tracking-tighter">
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
        {homeOptions.menuOptions.map((item, index) => (
          <>
            <Divider />
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }): string =>
                `${
                  isActive ? "animate-pulse bg-fuchsia-500" : "bg-fuchsia-600"
                }  flex py-3 pl-6 text-xl tracking-tighter`
              }
            >
              <span className="m-2 p-2 text-fuchsia-50 duration-300 hover:scale-105">
                {item.title}
              </span>
            </NavLink>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
}

export default AdminMenu;
