import React from "react";
import './style.scss';

const Button = ({ backgroundColor, borderColor, color, text }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#FFFFFF",
    borderColor: borderColor || "#000000",
    borderWidth: borderColor ? "1px" : "0",
    color: color || "#000000",
  };
  return (
    <button className="button" style={buttonStyle}>
      {text || ""}
    </button>
  );
};

export { Button };
