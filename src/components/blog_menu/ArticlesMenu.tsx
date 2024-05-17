import React from "react";
import textsConstants from "~/pages/blog_client/home/constants/texts.constants";
import { IMenuArticle } from "~/interfaces/menuInterface";
import { NavLink } from "react-router-dom";
function ArticlesMenu(): JSX.Element {
  return (
    <ul className="flex pt-2">
      {textsConstants.body.listTypes.map((item: IMenuArticle) => (
        <NavLink key={item.id} to={item.link} className={""}>
          <li className="rounded-full px-3 text-violet-500 hover:bg-slate-100 hover:text-fuchsia-500">
            {item.title}
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default ArticlesMenu;
