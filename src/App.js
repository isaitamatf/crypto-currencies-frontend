import React, { useState, useEffect } from 'react';
import { Toolbar, History } from './components';
import { getCryptos, getCurrencies, getRates, getHistory, postHistory } from './middleware';
import './App.scss';

async function cryptosPromise() {
  const response = getCryptos();
  return await response;
};

async function currenciesPromise() {
  return await getCurrencies();
};

async function ratesPromise() {
  return await getRates();
};

async function historyPromise() {
  return await getHistory();
};

function App() {
  const [ cryptos, setCryptos ] = useState();
  useEffect(() => {
    if (!cryptos) {
      cryptosPromise().then((response) => {
        setCryptos(response);
      });
    }
  }, [cryptos]);
  
  const [ currencies, setCurrencies ] = useState();
  useEffect(() => {
    if (!currencies) {
      currenciesPromise().then((response) => {
        setCurrencies(response);
      });
    }
  }, [currencies]);
  
  const [ rates, setRates ] = useState();
  useEffect(() => {
    if (!rates) {
      ratesPromise().then((response) => {
        setRates(response);
      });
    }
  }, [rates]);

  const [history, setHistory] = useState();
  useEffect(() => {
    if (!history) {
      historyPromise().then((response) => {
        setHistory(response);
      });
    }
  }, [history]);

  return (
    <div className="container">
      {cryptos && currencies ? (
        <Toolbar
          cryptos={cryptos}
          currencies={currencies}
          rates={rates}
          handleOnSave={postHistory}
        />
      ) : <></>}
      {history ? (
        <History data={history} />
      ) : <></>}
    </div>
  );
}

export default App;
