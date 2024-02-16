import React from "react";
import "../hero.css";
import MathGreater from "../../Icons/MathGreater";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";
const HeroCandidates = () => {
  return (
    <section className="hero candidates">
      <div className="content candidates">
        <div>
          <span>Trabajá</span>
          <span>Con</span>
          <span>Nosotros</span>
        </div>
        <p>
          Aplica a cientos de trabajos con unos pocos clics. Únete a nuestra{" "}
          <span>exclusiva comunidad</span> de talentos y te informaremos sobre
          nuevas oportunidades.
        </p>
        <ButtonLink
          textButton="Aplicar"
          linkTo="https://airtable.com/appk4D8VR2qbX7YkJ/shrjCoz9JbpztBlM7"
        >
          <MathGreater cssClass="math-greater" />
        </ButtonLink>
      </div>
    </section>
  );
};

export default HeroCandidates;
