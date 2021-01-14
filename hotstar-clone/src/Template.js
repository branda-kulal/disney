import React from "react";
import "./Template.css";

function Template({ image }) {
  return (
    <div className="template">
      <div className="template__info">
        <p className="template__price"></p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Template;
