import React, { useState, useEffect } from "react";
import Slide from "./Slide/Slide";

import "./carousel.css";
import slide1 from "../../../assets/images/Slide1.png";
import slide2 from "../../../assets/images/Slide2.png";
import slide3 from "../../../assets/images/Slide3.png";

const CarouselHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const FirstSlide = (
    <Slide
      icon={slide1}
      title="Sin Riesgo"
      description="Nuestras búsquedas cuentan con un seguro de reemplazo dependiendo de la categoría."
      position={currentSlide}
    />
  );
  const SecondSlide = (
    <Slide
      icon={slide2}
      title="En tiempo Récord"
      description="Procesos abiertos siempre, nos permite preseleccionar candidatos y presentarlos en tiempo récord."
      position={currentSlide}
    />
  );
  const ThirdSlide = (
    <Slide
      icon={slide3}
      title="Reclutamiento Personalizado"
      description="El cliente cuenta con un proceso optimizado a medida según sus necesidades."
      position={currentSlide}
    />
  );

  const slides = [FirstSlide, SecondSlide, ThirdSlide];
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
        <span ></span>
        <span ></span>
        <span ></span>
      </div>
      <button className="prev" onClick={handlePrevImage}>
        &#10094;
      </button>
      {slides[currentSlide]}
      <button className="next" onClick={handleNextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default CarouselHome;
