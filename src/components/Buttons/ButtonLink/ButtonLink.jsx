import React from "react";

import "./buttonLink.css";
import { Link } from "react-router-dom";
const ButtonLink = ({ textButton, linkTo, children }) => {
  return (
    <div className="button-link">
      <Link to={linkTo} target="_blank">
        <button>
          {textButton}
          {children}
        </button>
      </Link>
    </div>
  );
};

export default ButtonLink;
