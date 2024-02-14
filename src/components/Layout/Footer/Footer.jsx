import React from "react";

import { Link } from "react-router-dom";
import clinchBlue from "../../../assets/images/ClinchLogos/clinch-blue.png";
import Linkedin from "../../Icons/SocialMedia/Linkedin";
import Facebook from "../../Icons/SocialMedia/Facebook";
import Instagram from "../../Icons/SocialMedia/Instagram";

import "./footer.css";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={clinchBlue}
              className="img-logo"
              alt="Logo de Clinch"
              tabIndex="0"
            />
          </Link>
        </div>

        <ul>
          <li>
            <Link
              to="https://www.linkedin.com/company/hireclinch/"
              target="_blank"
            >
              <Linkedin className="linkedin" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/clinch.hr/" target="_blank">
              <Instagram className="instagram" />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=100090246983237"
              target="_blank"
            >
              <Facebook className="facebook" />
            </Link>
          </li>
        </ul>
      </div>
      <small className="copyright">
        2014 - {currentYear} Todos los derechos reservados. Hire Clinch
      </small>
    </footer>
  );
};

export default Footer;
