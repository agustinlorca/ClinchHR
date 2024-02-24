import React from "react";
import "./processCard.css";
import useIntersection from "../../../CustomHooks/useIntersection";
const ProcessCard = () => {
  const [refElement,isIntersecting] = useIntersection({threshold: 0.1})
  return (
    <section  className="process-card-container">
      <div className="process-card">
        <h1>
          Formar parte de <span>CLINCH</span> es <span>muy fácil</span>
        </h1>
        <div ref={refElement} style={{animation: isIntersecting ? "fade-in 2s ease" : "", opacity: isIntersecting ? "1" : "0"}} className="cards">
          <div>
            <h1>
              Completa tus datos, <br />
              sube tu CV
            </h1>
            <p>
              Déjanos tu información y el puesto donde te gustaría trabajar.
            </p>
          </div>
          <hr />
          <div>
            <h1>
              Agenda una <br />
              llamada
            </h1>
            <p>
              Concertaremos una llamada para conocerte mejor y completar tu
              perfil profesional.
            </p>
          </div>
          <hr />
          <div>
            <h1>
              Ahora formas parte de <br /> <span>CLINCH</span>
            </h1>
            <p>
              Te informaremos cuando hayan oportunidades acordes a tus
              expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessCard;
