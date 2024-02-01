import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clinchBlue from "../../../assets/images/clinch-blue.png";

import "./navbar.css";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav>
      <Link to="/">
        <img
          src={clinchBlue}
          className="logo"
          alt="Logo de Clinch"
          tabIndex="0"
        />
      </Link>
      <div className={isNavExpanded ? 'nav-menu expanded' : 'nav-menu'}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" >Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/candidatos" >Candidatos</NavLink>
          </li>
        </ul>
        <div className="nav-buttons">
          <Link to="/">
          <button className="btn-contact" >
            Contáctanos
          </button>
          </Link>
          <button className="btn-translate">
            English
          </button>
        </div>
      </div>
      <div className="burger-button">
        <BurgerButton isNavExpanded={isNavExpanded} handleNavExpanded={handleNavExpanded}/>
      </div>
     
    </nav>
  );
};

export default Navbar;
