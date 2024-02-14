import React, { useState, useEffect } from "react";
import SlideList from "../slideList/SlideList";
import slides from "../slides";
import "./slideContainer.css"
const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevImage) => (prevImage + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  const handlePrevImage = () => {
    setCurrentSlide(
      (prevImage) => (prevImage - 1 + slides.length) % slides.length
    );
  };

  const handleNextImage = () => {
    setCurrentSlide((prevImage) => (prevImage + 1) % slides.length);
  };
  return (
    <div className="slide-container">
      <div className="slide-bars">
        {
          slides.map((_,index) => (
            <span key={index} className={index === currentSlide ? "active" : ""}></span>
          ))
        }
      </div>
      <button className="prev" onClick={handlePrevImage}>
        &#10094;
      </button>
      <SlideList slides={slides} currentSlide={currentSlide} />
      <button className="next" onClick={handleNextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default SlideContainer;
