/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../styles/components/button-component.scss";

const Button = ({ url, download, text, classe }) => {
  return (
    <button className={classe}>
      <a href={url} download={download}>
        {text}
      </a>
    </button>
  );
};

export default Button;
