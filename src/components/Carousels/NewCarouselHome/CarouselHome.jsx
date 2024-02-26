import React, { useState, useEffect } from "react";
import "./carouselHome.css";
import slidesHome from "./slidesHome";
const CarouselHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const widthImg = 100 / slidesHome.length;

  useEffect(() => {
    const interval = setInterval(() => {
      moveToRight();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const moveToRight = () => {
    setCurrentSlide((prevCounter) =>
      prevCounter >= slidesHome.length - 1 ? 0 : prevCounter + 1
    );
  };

  const moveToLeft = () => {
    setCurrentSlide((prevCounter) =>
      prevCounter <= 0 ? slidesHome.length - 1 : prevCounter - 1
    );
  };
  return (
    <div className="container-carousel-home">
      <div className="slide-bars">
        {slidesHome.map((_, index) => (
          <span
            key={index + 5}
            className={index === currentSlide ? "active" : ""}
          ></span>
        ))}
      </div>
      <div
        className="carousel-home"
        style={{
          transform: `translate(-${currentSlide * widthImg}%)`,
        }}
      >
        {slidesHome.map((slide, index) => (
          <section key={index} className="slider-section">
            <div className="individual-slide">
              <img src={slide.icon} />
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
            <div className="image-overlay"></div>
            <img src={slide.background} loading="lazy"/>
          </section>
        ))}
      </div>
      <div className="btn-left" onClick={moveToLeft}>
        &#10094;
      </div>
      <div className="btn-right" onClick={moveToRight}>
        &#10095;
      </div>
    </div>
  );
};

export default CarouselHome;
