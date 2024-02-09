import React from "react";

import "./categoriesCard.css";

import PaintPallete from "../../Icons/PaintPallete";
import ShippingFast from "../../Icons/ShippingFast";
import DataDisplay from "../../Icons/DataDisplay";
import Finance from "../../Icons/Finance";

const CategoriesCard = () => {
  return (
    <section className="categories-card-container">
      <div className="categories-card">
        <h1><span>Aplica ahora</span> en las siguientes categorías</h1>
        <div className="categories">
          <div>
            <ShippingFast width="80px" height="80px" fill="black" className="icon-card"/>
            <span>Comercial & Logística</span>
          </div>
          <div>
            <PaintPallete  width="80px" height="80px" fill="black" className="icon-card"/>
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
            <Finance  width="80px" height="80px" fill="black" className="icon-card"/>
            <span> Contabilidad & Finanzas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCard;
