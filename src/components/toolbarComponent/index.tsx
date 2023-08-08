import React, { useEffect, useState } from "react";
import { ButtonComponent, DropdownComponent } from "..";
import { CURRENCY_SYMBOLS } from '../../constants';

export type ToolbarComponentProps = {
  isMobile: any;
  cryptos: any;
  currencies: any;
  rates: any;
  handleOnSave: any;
};

/**
 * @description Toolbar component
 * @param {boolean} isMobile Boolean that indicates if it is in responsive mode
 * @param {Array} cryptos Array of the cryptos currencies
 * @param {Array} currencies Array of the currencies
 * @param {Array} rates Array with all the rates between cryptos and currencies
 * @param {Function} handleOnSave Function that save the exchange selected
 * @returns {JSX}
 */
const ToolbarComponent: React.FC<ToolbarComponentProps> = ({
  isMobile,
  cryptos,
  currencies,
  rates,
  handleOnSave,
}) => {
  // Hook that select the currency from
  const [currencyFrom, setCurrencyFrom] = useState(
    cryptos ? cryptos[0].value : ""
  );
  // Hook that select the currency to
  const [currencyTo, setCurrencyTo] = useState(
    currencies ? currencies[0].value : ""
  );
  // Hook that select the amount from
  const [amount1, setAmount1] = useState(1);
  // Hook that select the amount to
  const [amount2, setAmount2] = useState(0);
  // Hook that find the rate and set the value of the currency
  useEffect(() => {
    const rateFound = rates.find(
      (r: any) => r.currencyFrom === currencyFrom && r.currencyTo === currencyTo
    );
    if (rateFound) {
      const result = amount1 * rateFound.rate;
      setAmount2(parseFloat(result.toFixed(2)));
    }
  }, [rates, currencyFrom, currencyTo, amount1]);
  /**
   * @description Function that set amount from
   * @param {*} e
   */
  const onChangeAmount1 = (e: any) => {
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
  /**
   * @description Function that show the amount to formatted
   * @returns {JSX}
   */
  const showAmount2Value = () => {
    if (currencyTo) {
      const currentSymbol: any = CURRENCY_SYMBOLS.find(
        (c) => c.value === currencyTo
      );
      return `${currentSymbol.symbol} ${amount2}`;
    }
  };
  /**
   * @description Function that check is inactive
   * @returns {boolean}
   */
  const buttonIsInactive = () => (amount1 <= 0 ? true : false);
  /**
   * @description Function that send the object for save the exchange
   */
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
          <DropdownComponent
            isMobile={isMobile}
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
        {!isMobile ? (
          <div className="toolbar-container-row flex-end">
            <span>=</span>
          </div>
        ) : (
          <></>
        )}
        <div className="toolbar-container-row">
          <label>Currency to</label>
          <DropdownComponent
            isMobile={isMobile}
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
          <ButtonComponent
            text={isMobile ? "Exchange" : "Save"}
            type="primary"
            isInactive={buttonIsInactive()}
            handleOnClick={handleOnClick}
          />
        </div>
      </div>
    </div>
  );
};

export { ToolbarComponent };