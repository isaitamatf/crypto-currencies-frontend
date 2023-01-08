import React from "react";

/**
 * @description Button component
 * @param {string} text Button text
 * @param {string} type Button type (primary or secondary)
 * @param {boolean} isInactive Boolean indicating whether the button is inactive or not.
 * @param {Function} handleOnClick Button click event
 * @returns {JSX}
 */
export const Button = ({ text, type, isInactive, handleOnClick }) => {
  return (
    <button
      className={`button-${type || "primary"} ${isInactive ? "inactive" : ""}`}
      onClick={handleOnClick}
    >
      {text || ""}
    </button>
  );
};