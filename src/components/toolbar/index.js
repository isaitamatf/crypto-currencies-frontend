import React, { useState } from "react";
import { Button, Dropdown } from "../index";
import { CRYPTOS, CURRENCIES } from '../../services/constants';

const Toolbar = () => {
  const [ currencyFrom, setCurrencyFrom ] = useState(CRYPTOS[0].value);
  const [ currencyTo, setCurrencyTo ] = useState(CURRENCIES[0].value);
  
  return (
    <div className="toolbar">
      <div className="toolbar-header">
        <span className="heading-1">Exchange</span>
      </div>
      <div className="toolbar-container">
        <div className="toolbar-container-row">
          <label>Currency from</label>
          <Dropdown
            setOption={setCurrencyFrom}
            options={CRYPTOS}
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
            options={CURRENCIES}
            optionSelected={currencyTo}
          />
        </div>
        <div className="toolbar-container-row">
          <label>Amount</label>
          <input />
        </div>
        <div className="toolbar-container-row flex-end">
          <Button text="Save" type="primary" />
        </div>
      </div>
    </div>
  );
};

export { Toolbar };
