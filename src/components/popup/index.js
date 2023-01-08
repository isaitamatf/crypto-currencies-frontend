import React from "react";

/**
 * @description Popup component
 * @param {boolean} exchangeSubmitted Boolean that show or hide the popup
 * @param {Function} setExchangeSubmitted Function that show or hide the popup
 * @returns {JSX}
 */
export const PopUp = ({ exchangeSubmitted, setExchangeSubmitted }) => {
  return (
    <div
      className={`popup ${exchangeSubmitted ? "open" : ""}`}
      onClick={() => setExchangeSubmitted(false)}
    >
      <span className="heading-2">Exchange submitted.</span>
    </div>
  );
};