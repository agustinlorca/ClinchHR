import React, { useState } from "react";
import ClientList from "../ClientList/ClientList";
import "./clientContainer.css";
import clients from "../clients";

const ClientContainer = () => {
  const [imgClients, setImgClients] = useState(clients);
  return (
    <section className="carousel-client-container">
      <div className="carousel-client">
        <h3>
          Empresas que confían en <span>CLINCH</span>
        </h3>
        <div>
        <ClientList clients={imgClients} />
        </div>
        
      </div>
    </section>
  );
};

export default ClientContainer;
