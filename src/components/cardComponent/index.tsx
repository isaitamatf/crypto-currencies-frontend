import React, { useState } from "react";
import { ButtonComponent } from '..';
import Moment from 'react-moment';

export type CardComponentProps = {
  data: any
}

/**
 * @description Card component
 * @param {Object} data Object of the exchange history
 * @returns {JSX}
 */
const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  // Hook opening and closing modal
  const [isOpen, setIsOpen] = useState(false);
  /**
   * @description Internal modal component
   * @returns {JSX}
   */
  const Modal = () => {
    return (
      <div className="modal">
        <div className="modal-header">
          <span className="heading-3">Exchange</span>
          <img
            alt="close"
            src={require("../../assets/img/close.png")}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="modal-container">
          <div className="modal-info">
            <div className="modal-info-row">
              <span className="modal-info-field">Date & Time</span>
              <span className="modal-info-value">
                <Moment format="DD-MM-YYYY @ HH.mm">{data.date}</Moment>
              </span>
            </div>
            <div className="modal-info-row">
              <span className="modal-info-field">Status</span>
              <span className="modal-info-value">
                <div className={`card-circle ${data.type.toLowerCase()}`}></div>
                <span
                  className={`modal-info-value-type ${data.type.toLowerCase()}`}
                >
                  Approved
                </span>
              </span>
            </div>
            <div className="modal-info-row">
              <span className="modal-info-field">From</span>
              <span className="modal-info-value">
                {data.currencyFrom.toUpperCase()}
              </span>
            </div>
            <div className="modal-info-row">
              <span className="modal-info-field">To</span>
              <span className="modal-info-value">
                {data.currencyTo.toUpperCase()}
              </span>
            </div>
            <div className="modal-info-row">
              <span className="modal-info-field">Amount</span>
              <span className="modal-info-value">
                {parseFloat(data.amount2)}
              </span>
            </div>
          </div>
          <div className="modal-action">
            <ButtonComponent
              text="Close"
              type="primary"
              handleOnClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="card" onClick={() => setIsOpen(true)}>
        <div className="card-title">
          {data.currencyFrom}
          <span>{"->"}</span>
          {data.currencyTo}
        </div>
        <div className="card-subtitle">
          <span>Amount</span>
          {data.amount1}
        </div>
        <div className={`card-circle ${data.type.toLowerCase()}`}></div>
      </div>
      {isOpen ? <Modal /> : <></>}
    </>
  );
};

export { CardComponent };