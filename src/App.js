import React, { useState, useEffect } from 'react';
import { Toolbar } from './components';
import { getCryptos, getCurrencies } from './middleware';
import './App.scss';

async function cryptosPromise() {
  const response = getCryptos();
  return await response;
};

async function currenciesPromise() {
  return await getCurrencies();
};

function App() {
  const [ cryptos, setCryptos ] = useState();
  const [ currencies, setCurrencies ] = useState();
  
  useEffect(() => {
    if (!cryptos) {
      cryptosPromise().then((response) => {
        setCryptos(response);
      });
    }
    if (!currencies) {
      currenciesPromise().then((response) => {
        setCurrencies(response);
      });
    }
  }, [cryptos, currencies]);

  return (
    <div className="container">
      {cryptos && currencies ? <Toolbar cryptos={cryptos} currencies={currencies} /> : <></>}
    </div>
  );
}

export default App;
