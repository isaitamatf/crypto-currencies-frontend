import React from "react";

const Button = ({ text, type, isInactive }) => {
  return (
    <button className={`button-${type || 'primary'} ${isInactive ? 'inactive' : ''}`}>
      {text || ""}
    </button>
  );
};

export { Button };
