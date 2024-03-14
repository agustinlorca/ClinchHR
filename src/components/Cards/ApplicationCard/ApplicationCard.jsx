import React from "react";


import "./applicationCard.css";
import card1 from "../../../assets/images/card1.jpg";
import applicationCardJPG from "../../../assets/images/application-card.jpg";
import applicationCardWEBP from "../../../assets/images/application-card.webp";
import useIntersection from "../../../CustomHooks/useIntersection";
import ActionButton from "../../Buttons/ActionButton/ActionButton";

const ApplicationCard = () => {
  const [refElement, isIntersecting] = useIntersection({ threshold: 0.2 });
  return (
    <section className="application-card-container">
      <div className="application-card">
        <div className="text-content">
          <h2
            ref={refElement}
            style={{
              animation: isIntersecting ? "slide-in-down-text 900ms ease" : "",
            }}
          >
            Oportunidades <span>SIN LIMITES</span>
          </h2>
          <p>
            Nuestra experiencia y logros se basan en nuestro compromiso por
            apoyarte en tus metas profesionales. Ofrecemos acceso a empleos de
            alto rendimiento. Gracias a nuestra{" "}
            <span>extensa red de colaboración con empresas líderes</span>, te
            presentamos diversas oportunidades laborales acordes a tus
            habilidades y aspiraciones.
          </p>
          <ActionButton
            textButton="Aplicar"
            linkTo="https://airtable.com/appk4D8VR2qbX7YkJ/shrjCoz9JbpztBlM7"
          />
        </div>
        <div className="image-content">
          <picture>
            {/* <source type="image/jpg" srcSet={card1} alt="Mano escribiendo en un papel" /> */}
            <img src={card1} alt="Mano escribiendo en un papel" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCard;
