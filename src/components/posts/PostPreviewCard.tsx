import React from "react";
import GeneralButton from "~/components/GeneralButton";

interface IProps {
  key: number;
  title: string;
  description: string;
  image: string;
  date: string;
}
function PostPreviewCard({ key, title, description, image, date }: IProps) {
  return (
    <div className="flex h-full w-1/3 flex-col rounded-lg bg-slate-50" key={key}>
      <span className="ml-2 text-violet-700">{title}</span>
      <img src={image} className="h-40 w-full rounded-2xl p-2" alt="..." />
      <span className="ml-2 h-full w-full text-slate-700">{description}</span>
      <span className="text-slate-400">{date}</span>
      <GeneralButton textButton={"Ver más"} btnType={"button"} />
    </div>
  );
}

export default PostPreviewCard;
