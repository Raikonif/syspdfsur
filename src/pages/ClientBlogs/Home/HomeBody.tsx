import React from "react";
import textsConstants from "~/pages/ClientBlogs/Home/constants/texts.constants";
import { NavLink } from "react-router-dom";
import PostsList from "~/components/posts/PostsList";
import PostPreviewCard from "~/components/posts/PostPreviewCard";
import { BiSearchAlt } from "react-icons/all";
function HomeBody(): JSX.Element {
  const article_selected_desktop = "bg-slate-100 text-fuchsia-500 border-b-2 border-fuchsia-500";
  const article_selected_mobile = "bg-slate-100 text-fuchsia-500";
  return (
    <div className="flex w-full justify-start">
      <div className="mr-5 flex w-2/3 flex-col">
        <div className="flex">
          <span className="font-semibold text-violet-700">Artículos</span>
          <div className="mx-2 flex w-full items-center justify-end rounded-full bg-slate-100 p-1">
            <label className="flex w-full items-center px-2" id="search">
              <input
                placeholder="Search"
                className="w-full bg-slate-100"
                id="search"
                name="search"
              />
            </label>
            <BiSearchAlt className="mr-2 text-violet-700" />
          </div>
        </div>
        <ul className="flex pt-2">
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
      <PostPreviewCard
        key={1}
        title={"test"}
        description={"description test"}
        image={"https://picsum.photos/200/300"}
        date={"01-01-2023"}
      />{" "}
    </div>
  );
}

export default HomeBody;
