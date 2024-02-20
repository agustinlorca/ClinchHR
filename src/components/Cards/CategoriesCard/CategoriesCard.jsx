import React from "react";

import "./categoriesCard.css";

import Design from "../../Icons/Design";
import Box from "../../Icons/Box";
import DataDisplay from "../../Icons/DataDisplay";
import Bank from "../../Icons/Bank";

const CategoriesCard = () => {
  return (
    <section className="categories-card-container">
      <div className="categories-card">
        <h1>Descubre <span>oportunidades laborales</span> en estas y otras áreas:</h1>
        <div className="categories">
          <div>
            <Box fill="black" className="icon-card"/>
            <span>Comercial <br/>& Logística</span>
          </div>
          <div>
            <Design fill="black" className="icon-card"/>
            <span> Marketing <br/>& Diseño</span>
          </div>
          <div>
            <DataDisplay
              fill="none"
              stroke="black"
              className="icon-card"
            />
            <span> Tecnología <br/>& Datos</span>
          </div>
          <div>
            <Bank fill="black" className="icon-card"/>
            <span> Contabilidad <br/>& Finanzas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCard;
