import React from "react";

interface IFieldProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
}

interface IProps {
  itemFields: IFieldProps[];
}
function Field({ itemFields }: IProps): JSX.Element {
  const listFields: JSX.Element[] = itemFields.map((item: IFieldProps) => (
    <label className="relative cursor-pointer" id={item.name} key={item.id}>
      <input
        name={item.name}
        type={item.type}
        placeholder={item.placeholder}
        className="m-2 h-[60px] w-96 px-6 text-2xl text-violet-500 border-violet-500 border-2 rounded-lg border-opacity-50 outline-none focus:border-violet-600 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
      />
      <span className="text-2xl text-violet-500 text-opacity-80 absolute left-5 top-5 px-1 transition duration-200 input-text">
        {item.placeholder}
      </span>
    </label>
  ));
  return <>{listFields}</>;
}

export default Field;
