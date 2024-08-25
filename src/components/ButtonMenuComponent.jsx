/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/components/buttonMenuComponent.scss";

const ButtonMenuComponent = ({ title, onClick }) => {
  return (
    <div className="project-item" onClick={onClick}>
      <p className="title-project">{title}</p>
    </div>
  );
};

export default ButtonMenuComponent;
