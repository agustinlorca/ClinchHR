import React from "react";
import { Link } from "react-router-dom";
import "./actionButton.css";
import Arrow from "../../Icons/Arrow";
const ActionButton = ({ textButton, linkTo}) => {
  return (
    <div className="apply-contact-button">
      <Link to={linkTo} target="_blank">
        <button>
          {textButton}
          <Arrow cssClass="arrow"/>
        </button>
      </Link>
    </div>
  );
};

export default ActionButton;
