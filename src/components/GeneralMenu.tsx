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
  return (
    <div className="bg-violet-500 h-screen w-1/6">
      <ul className="bg-violet-500 text-slate-50">
        {itemList.map((item: IMenuProps) => {
          return (
            <li className="text-slate-50" key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GeneralMenu;
