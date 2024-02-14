import React from "react";
import "../hero.css";
import { Link } from "react-router-dom";
import MathGreater from "../../Icons/MathGreater";
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
        <Link
          to="https://airtable.com/appk4D8VR2qbX7YkJ/shrjCoz9JbpztBlM7"
          target="_blank"
        >
          <button>
            Aplicar
            <MathGreater cssClass="math-greater"/>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroCandidates;
