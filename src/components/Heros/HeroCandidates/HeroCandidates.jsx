import React from "react";
import "../hero.css";
import { Link } from "react-router-dom";
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
        </Link>
      </div>
    </section>
  );
};

export default HeroCandidates;
