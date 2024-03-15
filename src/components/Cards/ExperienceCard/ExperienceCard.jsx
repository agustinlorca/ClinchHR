import React from "react";
import "./experienceCard.css";
import person1 from "../../../assets/images/Persons/person1.webp"
import person2 from "../../../assets/images/Persons/person2.webp"
import person3 from "../../../assets/images/Persons/person3.webp"
import person4 from "../../../assets/images/Persons/person4.webp"
const ExperienceCard = () => {
  return (
    <div className="experience-card-container">
      <section className="experience-card">
        <h3>
          Tu experiencia en <span>CLINCH</span> es importante
        </h3>
        <div className="card-list-container">
        <div className="card-list">
          <div className="card">
            <img
              src={person1}
              width="40px"
              height="40px"
              alt="Foto de perfil de una persona en la sección de reseñas"
            />
            <div className="info">
              <h5>Sabrina Sánchez</h5>
              <small>
                Gerente administrativa de <span>Grupo Alas</span>
              </small>
              <h6>"Confiable y sin complicaciones"</h6>
              <p>
                Llevo usando esta herramienta varios años y ha sido fundamental
                para formar nuestro equípo de profesionales.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={person3}
              width="40px"
              height="40px"
              alt="Foto de perfil de una persona en la sección de reseñas"
            />
            <div className="info">
              <h5>Santiago Fernández</h5>
              <small>
                Gerente de <span>Farmacity</span>
              </small>
              <h6>"La manera mas efectiva para encontrar talentos"</h6>
              <p>
                Me impresiona la calidad de los candidatos que hemos encontrado
                a través de esta plataforma. Cada uno de ellos ha demostrado ser
                un activo valioso para nuestro equipo.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={person2}
              width="40px"
              height="40px"
              alt="Foto de perfil de una persona en la sección de reseñas"
            />
            <div className="info">
              <h5>Carolina López</h5>
              <small>
                Directora de Recursos Humanos en <span>Billabong</span>
              </small>
              <h6>"El lugar indicado para buscar personal"</h6>
              <p>
                Desde que incorporamos esta plataforma, hemos agilizado
                significativamente nuestro proceso de contratación y hemos
                encontrado talento excepcional en cada contratación.
              </p>
            </div>
          </div>
          <div className="card">
            <img
             src={person4}
              width="40px"
              height="40px"
              alt="Foto de perfil de una persona en la sección de reseñas"
            />
            <div className="info">
              <h5>Martin Díaz</h5>
              <small>
                Jefe del departamento de personal en <span>Cero es Tres</span>
              </small>
              <h6>"Transparente y eficiente"</h6>
              <p>
                Destaco la transparencia en todo el proceso de reclutamiento.
                Desde la búsqueda hasta la contratación final, todo se realiza
                de manera clara y eficiente.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceCard;
