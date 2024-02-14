import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clinchBlue from "../../../assets/images/ClinchLogos/clinch-blue.png";

import "./navbar.css";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar">
      <div className="container-logo">
        <Link to="/">
          <img
            src={clinchBlue}
            className="logo"
            alt="Logo de Clinch"
            tabIndex="0"
          />
        </Link>
      </div>

      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/candidatos">Candidatos</NavLink>
          </li>
        </ul>
        <div className="nav-buttons">
          <Link
            to="https://airtable.com/appk4D8VR2qbX7YkJ/shrjCoz9JbpztBlM7"
            target="_blank"
          >
            <button className="btn-contact">Contáctanos</button>
          </Link>
        </div>
      </div>
      <div className="burger-button">
        <BurgerButton
          isNavExpanded={isNavExpanded}
          handleNavExpanded={handleNavExpanded}
        />
      </div>
    </nav>
  );
};

export default Navbar;
