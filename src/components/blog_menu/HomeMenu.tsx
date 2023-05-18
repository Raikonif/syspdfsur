import React from "react";
import homeOptions from "~/constants/options/home.options";
import IMenuInterface from "~/interfaces/menuInterface";
import { NavLink } from "react-router-dom";

function HomeMenu(): JSX.Element {
  const activeDesktop = "bg-violet-500 rounded-full duration-500";
  const listMenu: JSX.Element[] = homeOptions.blogOptions.map((item: IMenuInterface) => (
    <NavLink
      className="flex h-full bg-violet-700 hover:rounded-full hover:bg-violet-500 hover:duration-500"
      key={item.id}
      to={item.link}
    >
      <li className="m-2 flex text-lg font-semibold text-white">{item.title}</li>
    </NavLink>
  ));
  return (
    <>
      {/*<div className="flex w-full flex-col items-center justify-center bg-slate-700"></div>*/}
      <ul className="flex w-full items-center justify-end bg-violet-700 p-3 pr-5">{listMenu}</ul>
    </>
  );
}

export default HomeMenu;
