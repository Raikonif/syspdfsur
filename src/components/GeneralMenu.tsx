import React from "react";

interface IMenuProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}

interface IProps {
  itemList: IMenuProps[];
}

function GeneralMenu({ itemList }: IProps): JSX.Element {
  const listItems: JSX.Element[] = itemList.map((item: IMenuProps) => (
    <li
      className="pb-10 pl-4 pt-10 text-slate-50 shadow hover:rounded-r-lg hover:bg-violet-600 hover:text-slate-200 hover:shadow-lg active:bg-violet-400"
      key={item.id}
    >
      {item.title}
    </li>
  ));
  return (
    <div className="h-screen w-40 rounded-r-2xl bg-fuchsia-600">
      <ul className="text-white">{listItems}</ul>
    </div>
  );
}

export default GeneralMenu;
