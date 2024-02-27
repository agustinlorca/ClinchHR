import React from "react";
import "./homeCard.css";
import useIntersection from "../../../CustomHooks/useIntersection";
import ActionButton from "../../Buttons/ActionButton/ActionButton";
import CarouselHome from "../../Carousels/CarouselHome/CarouselHome";
const HomeCard = () => {
  const [refElement, isIntersecting] = useIntersection({ threshold: 0.2 });
  return (
    <section className="home-card-container">
      <div className="home-card">
        <div className="text-content">
          <h1
            ref={refElement}
            style={{
              animation: isIntersecting ? "slide-in-down-text 900ms ease" : "",
            }}
          >
            Bienvenidos a <span>CLINCH</span>
          </h1>
          <p>
            Somos expertos en reclutamiento de alta exigencia. Empresas del
            rubro textil, real estate, ciberseguridad, consumo masivo y retail
            de primera línea internacional <span>confían en CLINCH</span> para
            formar sus equipos diariamente. 
          </p>
          <ActionButton
            textButton="Contactanos"
            linkTo="https://calendly.com/julibait/bait-meet"
          />
        </div>
        <div className="slider-content">
          <CarouselHome/>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
