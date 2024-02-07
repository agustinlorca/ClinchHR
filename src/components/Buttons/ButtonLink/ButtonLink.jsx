import React from "react";

import "./buttonLink.css";
import { Link } from "react-router-dom";
const ButtonLink = ({ textButton, linkTo }) => {
  return (
    <div className="button-link">
      <Link to={linkTo} target="_blank" >
        <button>
          {textButton}
          <svg
            className="math-greater"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.8125 1.8385L9.28646 9.31246L1.8125 16.7864"
              stroke="white"
              strokeWidth="2.5625"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default ButtonLink;
