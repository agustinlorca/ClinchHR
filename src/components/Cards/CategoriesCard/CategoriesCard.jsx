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
        <h1><span>Aplica ahora</span> en las siguientes categorías</h1>
        <div className="categories">
          <div>
            <Box width="80px" height="80px" fill="black" className="icon-card"/>
            <span>Comercial & Logística</span>
          </div>
          <div>
            <Design  width="80px" height="80px" fill="black" className="icon-card"/>
            <span> Marketing & Diseño</span>
          </div>
          <div>
            <DataDisplay
               width="80px" height="80px"
              fill="none"
              stroke="black"
              className="icon-card"
            />
            <span> Tecnología & Datos</span>
          </div>
          <div>
            <Bank  width="80px" height="80px" fill="black" className="icon-card"/>
            <span> Contabilidad & Finanzas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCard;
