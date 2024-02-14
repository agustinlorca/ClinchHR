import React, { useState } from "react";

import "./slide.css";

const Slide = ({ icon, title, description }) => {
  return (
    <div className="slide">
      <img src={icon} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Slide;
