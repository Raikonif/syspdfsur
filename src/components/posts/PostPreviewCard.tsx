import React from "react";
import GeneralButton from "~/components/GeneralButton";
import IPostInterface from "~/interfaces/IPostInterface";

function PostPreviewCard({ key, title, description, image, date }: IPostInterface) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-slate-50" key={key}>
      <span className="my-1 ml-2 font-semibold text-violet-700">{title}</span>
      <span className="my-1 ml-2 h-full w-full text-slate-700">{description}</span>
      <img src={image} className="my-1 h-40 w-full rounded-2xl p-2" alt="..." />
      <span className="my-1 text-slate-400">{date}</span>
      <GeneralButton textButton={"Ver más"} btnType={"button"} />
    </div>
  );
}

export default PostPreviewCard;
