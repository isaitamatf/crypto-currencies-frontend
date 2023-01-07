import React, { useState } from "react";
import { Button, Dropdown } from "../index";
import { currencyFromOptions, currencyToOptions } from '../../services/constants';
import "./style.scss";

const Toolbar = () => {
  const [ currencyFrom, setCurrencyFrom ] = useState(currencyFromOptions[0].value);
  const [ amount1, setAmount1 ] = useState(1);
  const [ currencyTo, setCurrencyTo ] = useState(currencyToOptions[0].value);
  const [ amount2, setAmount2] = useState(0);
  
  const exchangeCurrency = () => {};
  
  return (
    <div className="toolbar">
      <div className="toolbar-header">
        <span>Exchange</span>
      </div>
      <div className="toolbar-container">
        <div className="toolbar-container-row">
          <label>Currency from</label>
          <Dropdown
            setOption={setCurrencyFrom}
            options={currencyFromOptions}
            optionSelected={currencyFrom}
          />
        </div>
        <div className="toolbar-container-row">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="toolbar-container-row flex-end">
          <span>=</span>
        </div>
        <div className="toolbar-container-row">
          <label>Currency to</label>
          <Dropdown
            setOption={setCurrencyTo}
            options={currencyToOptions}
            optionSelected={currencyTo}
          />
        </div>
        <div className="toolbar-container-row">
          <label>Amount</label>
          <input />
        </div>
        <div className="toolbar-container-row flex-end">
          <Button backgroundColor="#49CD5E" color="#FFFFFF" text="Save" />
        </div>
      </div>
    </div>
  );
};

export { Toolbar };
