import React, { useState, useEffect } from 'react';
import { Toolbar, History, PopUp } from './components';
import { getCryptos, getCurrencies, getRates, getHistory, postHistory } from './middleware';
import './App.scss';
import { useMediaQuery } from "react-responsive";

async function getCryptosPromise() {
  const response = getCryptos();
  return await response;
};

async function getCurrenciesPromise() {
  return await getCurrencies();
};

async function getRatesPromise() {
  return await getRates();
};

async function getHistoryPromise() {
  return await getHistory();
};

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });

  const [ cryptos, setCryptos ] = useState();
  useEffect(() => {
    if (!cryptos) {
      getCryptosPromise().then((response) => {
        setCryptos(response);
      });
    }
  }, [cryptos]);
  
  const [ currencies, setCurrencies ] = useState();
  useEffect(() => {
    if (!currencies) {
      getCurrenciesPromise().then((response) => {
        setCurrencies(response);
      });
    }
  }, [currencies]);
  
  const [ rates, setRates ] = useState();
  useEffect(() => {
    if (!rates) {
      getRatesPromise().then((response) => {
        setRates(response);
      });
    }
  }, [rates]);

  const [history, setHistory] = useState();
  useEffect(() => {
    if (!history) {
      getHistoryPromise().then((response) => {
        setHistory(response);
      });
    }
  }, [history]);

  const [exchangeSubmitted, setExchangeSubmitted] = useState(false);
  useEffect(() => {
    if (exchangeSubmitted) {
      setTimeout(() => {
        setExchangeSubmitted(false);
      }, 10000)
    }
  }, [exchangeSubmitted]);

  const handleOnSave = (history) => {
    postHistory(history, setHistory, setExchangeSubmitted);
  }

  const [sort, setSort] = useState("");
  useEffect(() => {
    if (sort) {
      const desc = sort.search('-');
      const historySorted = history.sort((a, b) => {
        if (desc > -1) {
          const column = sort.replace('-','');
          return a[column] > b[column] ? 1 : -1;
        } else {
          return a[sort] > b[sort] ? -1 : 1;
        }
      });
      setHistory(historySorted);
    }
  }, [sort, history]);

  return (
    <div className="container">
      {cryptos && currencies ? (
        <Toolbar
          isMobile={isMobile}
          cryptos={cryptos}
          currencies={currencies}
          rates={rates}
          handleOnSave={handleOnSave}
        />
      ) : (
        <></>
      )}
      {history ? (
        <History
          isMobile={isMobile}
          data={history}
          sort={sort}
          setSort={setSort}
        />
      ) : (
        <></>
      )}
      <PopUp
        exchangeSubmitted={exchangeSubmitted}
        setExchangeSubmitted={setExchangeSubmitted}
      />
    </div>
  );
}

export default App;
