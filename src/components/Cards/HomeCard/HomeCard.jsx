import React from "react";
import "./homeCard.css";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";
import SlideContainer from "../../Carousels/CarouselHome/SlideContainer/SlideContainer";
import MathGreater from "../../Icons/MathGreater";
import useIntersection from "../../../CustomHooks/useIntersection";
const HomeCard = () => {
  const [refElement,isIntersecting] = useIntersection({threshold: 0.2,})
  return (
    <section className="home-card-container">
      <div className="home-card">
        <div className="text-content">
          <h1 ref={refElement} style={{animation: isIntersecting ? "slide-in-down-text 900ms ease" : ""}}>
            Bienvenidos a <span>CLINCH</span>
          </h1>
          <p>
            Somos expertos en reclutamiento de alta exigencia. Empresas del
            rubro textil, real estate, ciberseguridad, consumo masivo y retail
            de primera línea internacional <span>confían en CLINCH</span> para
            formar sus equipos diariamente. 
          </p>
          <ButtonLink
          textButton="Contactenos"
          linkTo="https://calendly.com/julibait/bait-meet"
        >
          <MathGreater cssClass="math-greater" />
        </ButtonLink>
        </div>
        <div className="slider-content">
          <SlideContainer className="slide-container"/>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
