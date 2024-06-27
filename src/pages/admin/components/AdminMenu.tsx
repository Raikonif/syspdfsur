import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { Divider } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import homeOptions from "~/constants/options/home.options";
import SwitchTheme from "~/pages/admin/components/SwitchTheme";
import { AnimatePresence, motion } from "framer-motion";

function AdminMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && openMenu === false) {
        setOpenMenu(true);
      }
      if (window.innerWidth < 1024 && openMenu === true) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu]);
  return (
    <div className="fixed left-0 top-0 z-30 w-full flex-col bg-fuchsia-600 tracking-tighter lg:relative lg:flex lg:h-screen lg:w-[200px]">
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
          <span className="my-2 font-semibold tracking-tighter text-white lg:hidden">
            {"Casos"}
          </span>
        ) : (
          <span className="my-2 font-semibold tracking-tighter text-white lg:hidden">{"Menu"}</span>
        )}
        <div className="flex py-1 lg:hidden">
          <SwitchTheme size={"sm"} />
        </div>
      </div>
      <div className="hidden p-2 text-center text-fuchsia-50 lg:relative lg:flex lg:flex-col">
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
      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="flex flex-col lg:relative lg:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {homeOptions.menuOptions.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <Divider />
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }): string =>
                    `${
                      isActive ? "animate-pulse bg-fuchsia-500" : "bg-fuchsia-600"
                    }  flex py-1 pl-4 text-lg lg:py-3 lg:pl-6 lg:text-xl lg:tracking-tighter`
                  }
                >
                  <span
                    className="text-fuchsia-50 duration-300 hover:scale-105 lg:m-2 lg:p-2"
                    key={index}
                  >
                    {item.title}
                  </span>
                </NavLink>
                <Divider />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminMenu;
