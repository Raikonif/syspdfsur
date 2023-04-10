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
      className="text-slate-50 pt-10 pb-10 pl-4 border-b pr-3 hover:bg-violet-400 rounded-r-2xl hover:shadow-2xl hover:border-2"
      key={item.id}
    >
      {item.title}
    </li>
  ));
  return (
    <div className="bg-violet-500 rounded-r-2xl h-screen w-40">
      <ul className="text-slate-50">{listItems}</ul>
    </div>
  );
}

export default GeneralMenu;
