import React from "react";
import textsConstants from "~/pages/ClientBlogs/Home/constants/texts.constants";
import { NavLink } from "react-router-dom";
import PostsList from "~/components/posts/PostsList";
function HomeBody(): JSX.Element {
  return (
    <div className="flex w-full justify-start">
      <div className="flex flex-col">
        <span>Artículos</span>
        <ul className="flex">
          {textsConstants.body.listTypes.map((item: any) => (
            <NavLink key={item.id} to={item.link} className="">
              <li className="px-3">{item.name}</li>
            </NavLink>
          ))}
        </ul>
        <PostsList />
      </div>
    </div>
  );
}

export default HomeBody;
