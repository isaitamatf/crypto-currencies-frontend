import React from "react";

export type PopUpComponentProps = {
  exchangeSubmitted: any;
  setExchangeSubmitted: any;
};

/**
 * @description Popup component
 * @param {boolean} exchangeSubmitted Boolean that show or hide the popup
 * @param {Function} setExchangeSubmitted Function that show or hide the popup
 * @returns {JSX}
 */
const PopUpComponent: React.FC<PopUpComponentProps> = ({
  exchangeSubmitted,
  setExchangeSubmitted,
}) => {
  return (
    <div
      className={`popup ${exchangeSubmitted ? "open" : ""}`}
      onClick={() => setExchangeSubmitted(false)}
    >
      <span className="heading-2">Exchange submitted.</span>
    </div>
  );
};

export { PopUpComponent };
