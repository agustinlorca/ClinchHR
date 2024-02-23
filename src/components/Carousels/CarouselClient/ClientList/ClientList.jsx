import React, { useEffect } from "react";
import "./clientList.css";
const ClientList = ({ clients }) => {
  const clientsList = [...clients, ...clients];
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--client-length",
      clients.length
    );
  }, [clients.length]);
  return (
    <div className="slider-client">
      <div className="slide-track">
        {clientsList.map((client, index) => (
          <div key={index} className="slide-client">
            <img src={client} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
