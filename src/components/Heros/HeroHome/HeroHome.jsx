import React from "react";
import "../Hero.css";
import MathGreater from "../../Icons/MathGreater";
import ButtonLink from "../../Buttons/ButtonLink/ButtonLink";

const HeroHome = () => {
  return (
    <section className="hero home">
      <div className="content home">
        <div>
          <span>Contratá</span>
          <span>Personal</span>
          <span>Verificado</span>
        </div>
        <p>
          Búsquedas permanentes abiertas, para presentar candidatos altamente
          calificados en <span>tiempo récord</span>, sin comprometer la calidad.
        </p>
        <ButtonLink
          textButton="Contactar"
          linkTo="https://calendly.com/julibait/bait-meet"
        >
          <MathGreater cssClass="math-greater" />
        </ButtonLink>
      </div>
    </section>
  );
};

export default HeroHome;
