import React from "react";

const Button = ({ text, type, isInactive, handleOnClick }) => {
  return (
    <button
      className={`button-${type || "primary"} ${isInactive ? "inactive" : ""}`}
      onClick={handleOnClick}
    >
      {text || ""}
    </button>
  );
};

export { Button };
