import React from "react";
import "../hero.css";

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
          <svg
            className="math-greater"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.8125 1.8385L9.28646 9.31246L1.8125 16.7864"
              stroke="white"
              strokeWidth="2.5625"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroHome;
