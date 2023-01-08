import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "../index";
import { CURRENCY_SYMBOLS } from '../../services/constants';

const Toolbar = ({ cryptos, currencies, rates, handleOnSave }) => {
  const [currencyFrom, setCurrencyFrom] = useState(
    cryptos ? cryptos[0].value : ""
  );
  const [currencyTo, setCurrencyTo] = useState(
    currencies ? currencies[0].value : ""
  );
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(0);

  useEffect(() => {
    const rateFound = rates.find(
      (r) => r.currencyFrom === currencyFrom && r.currencyTo === currencyTo
    );
    const result = amount1 * rateFound.rate;
    setAmount2(parseFloat(result.toFixed(2)));
  }, [rates, currencyFrom, currencyTo, amount1]);

  const onChangeAmount1 = (e) => {
    if (e && e.target) {
      const value = parseFloat(e.target.value);
      if (typeof value === "number" && !isNaN(value)) {
        if (value >= 0) {
          setAmount1(value);
        } else {
          setAmount1(0);
        }
      }
    }
  };

  const showAmount2Value = () => {
    const currentSymbol = CURRENCY_SYMBOLS.find((c) => c.value === currencyTo);
    return `${currentSymbol.symbol} ${amount2}`;
  };

  const buttonIsInactive = () => (amount1 <= 0 ? true : false);

  const handleOnClick = () => {
    const historySaved = {
      date: new Date().toISOString(),
      currencyFrom,
      amount1,
      currencyTo,
      amount2,
      type: "Exchanged",
    };
    handleOnSave(historySaved);
  };

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
            options={cryptos}
            optionSelected={currencyFrom}
          />
        </div>
        <div className="toolbar-container-row">
          <label>Amount</label>
          <input
            type="number"
            onChange={onChangeAmount1}
            defaultValue={amount1}
            min={0}
          />
        </div>
        <div className="toolbar-container-row flex-end">
          <span>=</span>
        </div>
        <div className="toolbar-container-row">
          <label>Currency to</label>
          <Dropdown
            setOption={setCurrencyTo}
            options={currencies}
            optionSelected={currencyTo}
          />
        </div>
        <div className="toolbar-container-row">
          <label>Amount</label>
          <input type="text" value={showAmount2Value()} disabled />
        </div>
        <div className="toolbar-container-row flex-end">
          <Button
            text="Save"
            type="primary"
            isInactive={buttonIsInactive()}
            handleOnClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
};

export { Toolbar };
