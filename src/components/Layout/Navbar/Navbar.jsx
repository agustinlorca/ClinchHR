import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import clinchBlue from "../../../assets/images/ClinchLogos/clinch-blue.png";

import "./navbar.css";
import BurgerButton from "./BurgerButton";

const Navbar = () => {
  const { pathname } = useLocation();

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="navbar-container">
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
              <NavLink to="/">Empresas</NavLink>
            </li>
            <li>
              <NavLink to="/candidatos">Candidatos</NavLink>
            </li>
          </ul>
          <div className="nav-buttons">
            <Link
              to="https://calendly.com/julibait/bait-meet?month=2024-02"
              target="_blank"
            >
              <button className="btn-contact">Contactanos</button>
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
    </div>
  );
};

export default Navbar;
