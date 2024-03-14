import React from "react";
import "./experienceCard.css";

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
              src="https://this-person-does-not-exist.com/img/avatar-gen11bde92cf1867ce7ba75ede8d9a3fc25.jpg"
              width="40px"
              height="40px"
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
              src="https://this-person-does-not-exist.com/img/avatar-gen11652337f47985d357e2565ae69ec8b8.jpg"
              width="40px"
              height="40px"
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
              src="https://this-person-does-not-exist.com/img/avatar-gen1128e20f4adfbda8503c1b5788910a3e.jpg"
              width="40px"
              height="40px"
            />
            <div className="info">
              <h5>Carolina López</h5>
              <small>
                Directora de Recursos Humanos en <span>Billabong</span>
              </small>
              <h6>"EL lugar indicado para buscar personal"</h6>
              <p>
                Desde que incorporamos esta plataforma, hemos agilizado
                significativamente nuestro proceso de contratación y hemos
                encontrado talento excepcional en cada contratación.
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://this-person-does-not-exist.com/img/avatar-gen1342b9fa16c8e586b2fa9022839747ab.jpg"
              width="40px"
              height="40px"
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
