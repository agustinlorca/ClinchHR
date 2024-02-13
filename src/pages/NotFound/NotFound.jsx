import React from "react";

import errorSign from "../../assets/images/error-sign.png";
import "./notFound.css";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
const NotFound = () => {
  return (
    <Layout>
      <div className="error-page-container">
        <div className="error-page">
          <div className="info">
            <h1>
              Oops! Parece que <br /> te has perdido
            </h1>
            <p>
              No hemos podido encontrar la página.
              <br /> Es posible que no exista o se haya modificado.
            </p>

            <Link to="/" className="link">
              <button>Volver al inicio</button>
            </Link>
          </div>
          <img src={errorSign} />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
