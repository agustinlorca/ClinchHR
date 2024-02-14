import React from "react";
import "../hero.css";
import MathGreater from "../../Icons/MathGreater";

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
        <button>
          Contactar
          <MathGreater cssClass="math-greater"/>
        </button>
      </div>
    </section>
  );
};

export default HeroHome;
