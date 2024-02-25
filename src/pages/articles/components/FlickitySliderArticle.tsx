import React, { useEffect, useRef } from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 2,
};

function FlickitySliderArticle() {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={true} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <div className="">
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt={"..."} />
        <p>{"HOLAAAAA"}</p>
      </div>
      <div className="">
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt={"..."} />
        <p>{"HOLAAAAA"}</p>
      </div>
      <div className="">
        <img src="https://www.w3schools.com/w3images/lights.jpg" alt={"..."} />
        <p>{"HOLAAAAA"}</p>
      </div>
    </Flickity>
  );
}

export default FlickitySliderArticle;
