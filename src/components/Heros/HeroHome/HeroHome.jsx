import React from "react";
import "../Hero.css";
import ActionButton from "../../Buttons/ActionButton/ActionButton";

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
          Búsquedas permanentes abiertas, para presentar <br/> candidatos altamente
          calificados en <span>tiempo récord</span>,<br/> sin comprometer la calidad.
        </p>
        <ActionButton
          textButton="Contactar"
          linkTo="https://calendly.com/julibait/bait-meet"
        />
      </div>
    </section>
  );
};

export default HeroHome;
