import React, { useState } from "react";
import { Button, Dropdown } from "../index";
import "./style.scss";

const currencyFromOptions = [
  {
    name: "BTC - Bitcoin",
    value: "btc",
  },
  {
    name: "ETH - Ethereum",
    value: "eth",
  },
  {
    name: "XRP - Ripple",
    value: "xrp",
  },
  {
    name: "LTC - Litcoin",
    value: "ltc",
  },
];

const currencyToOptions = [
  {
    name: "EUR - Euro",
    value: "eur",
  },
  {
    name: "USD - American Dollar",
    value: "usd",
  },
  {
    name: "GBP - Pound sterling",
    value: "gbp",
  },
  {
    name: "CAD - Canadian Dollar",
    value: "cad",
  }
];

const Toolbar = () => {
  const [ currencyFrom, setCurrencyFrom ] = useState("");
  const [ currencyTo, setCurrencyTo ] = useState("");
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
          <input />
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
        <div className="toolbar-container-row action">
          <Button backgroundColor="#49CD5E" color="#FFFFFF" text="Save" />
        </div>
      </div>
    </div>
  );
};

export { Toolbar };
