import React from "react";
import textsConstants from "~/pages/ClientBlogs/Home/constants/texts.constants";
import { NavLink } from "react-router-dom";
import PostsList from "~/components/posts/PostsList";
function HomeBody(): JSX.Element {
  const article_selected_desktop = "bg-slate-100 text-fuchsia-500";
  const article_selected_mobile = "bg-slate-100 text-fuchsia-500";
  return (
    <div className="flex w-full justify-start">
      <div className="flex flex-col">
        <span className="font-semibold text-violet-700">Artículos</span>
        <ul className="flex">
          {textsConstants.body.listTypes.map((item: any) => (
            <NavLink key={item.id} to={item.link} className={""}>
              <li className="rounded-full px-3 text-violet-500 hover:bg-slate-100 hover:text-fuchsia-500">
                {item.name}
              </li>
            </NavLink>
          ))}
        </ul>
        <PostsList />
      </div>
    </div>
  );
}

export default HomeBody;
