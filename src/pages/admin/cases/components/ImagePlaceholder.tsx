import React from "react";
import image_placeholder from "~/assets/image_placeholder.svg";

function ImagePlaceholder() {
  return <img src={image_placeholder} alt={"..."} className="h-full text-black dark:text-white" />;
}

export default ImagePlaceholder;
