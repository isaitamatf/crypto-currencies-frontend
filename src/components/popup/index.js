import React from "react";

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