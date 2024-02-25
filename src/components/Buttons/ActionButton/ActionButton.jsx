import React from "react";
import { Link } from "react-router-dom";
import "./actionButton.css";
import MathGreater from "../../Icons/MathGreater";
const ActionButton = ({ textButton, linkTo}) => {
  return (
    <div className="apply-contact-button">
      <Link to={linkTo} target="_blank">
        <button>
          {textButton}
          <MathGreater cssClass="arrow"/>
        </button>
      </Link>
    </div>
  );
};

export default ActionButton;
