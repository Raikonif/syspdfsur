import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { Divider } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import homeOptions from "~/constants/options/home.options";
import SwitchTheme from "~/pages/admin/components/SwitchTheme";

function AdminMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex flex-col bg-fuchsia-600 tracking-tighter lg:h-screen lg:w-[200px]">
      <div className="flex w-full justify-between">
        {!openMenu ? (
          <FaBars
            className="my-2 ml-3 flex text-fuchsia-50 lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <GoXCircleFill
            className="my-2 ml-3 flex text-fuchsia-50 lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        {!openMenu ? (
          <span className="my-2 font-semibold tracking-tighter text-white">{"Casos"}</span>
        ) : (
          <span className="my-2 font-semibold tracking-tighter text-white">{"Menu"}</span>
        )}
        <div className="flex py-1 lg:hidden">
          <SwitchTheme size={"sm"} />
        </div>
      </div>
      <div className="hidden p-2 text-center text-fuchsia-50 lg:flex lg:flex-col">
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
        {openMenu &&
          homeOptions.menuOptions.map((item, index) => (
            <>
              <Divider />
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }): string =>
                  `${
                    isActive ? "animate-pulse bg-fuchsia-500" : "bg-fuchsia-600"
                  }  flex py-1 pl-4 text-sm lg:py-3 lg:pl-6 lg:text-xl lg:tracking-tighter`
                }
              >
                <span className="text-fuchsia-50 duration-300 hover:scale-105 lg:m-2 lg:p-2">
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
