import React from "react";
import "./homeCard.css";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";
import SlideContainer from "../../Carousels/CarouselHome/SlideContainer/SlideContainer";

const HomeCard = () => {
  return (
    <section className="home-card-container">
      <div className="home-card">
        <div className="text-content">
          <h1>
            Bienvenidos a <span>CLINCH</span>
          </h1>
          <p>
            Somos expertos en reclutamiento de alta exigencia. Empresas del
            rubro textil, real estate, ciberseguridad, consumo masivo y retail
            de primera línea internacional <span>confían en CLINCH</span> para
            formar sus equipos diariamente. 
          </p>
          <ButtonLink
            textButton="Contáctenos"
            linkTo="https://calendly.com/julibait/bait-meet"
          />
        </div>
        <div className="slider-content">
          <SlideContainer className="slide-container"/>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
