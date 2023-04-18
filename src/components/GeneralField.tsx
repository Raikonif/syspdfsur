import React from "react";

interface IField {
  name: string;
  id: string;
  type: string;
  value: string;
  placeholder: string;
}
interface IProps {
  fieldObj: IField;
}
function GeneralField({ fieldObj }: IProps): JSX.Element {
  return (
    <div className="">
      <h1>GeneralField</h1>
    </div>
  );
}

export default GeneralField;
