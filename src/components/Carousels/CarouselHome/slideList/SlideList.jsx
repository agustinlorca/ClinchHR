import React from "react";
import Slide from "../Slide/Slide";
const SlideList = ({ slides, currentSlide }) => {
  return (
      <Slide
        icon={slides[currentSlide].icon}
        title={slides[currentSlide].title}
        description={slides[currentSlide].description}
      />
  );
};

export default SlideList;
