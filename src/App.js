import React, { useState, useEffect } from 'react';
import { Toolbar, History, PopUp } from './components';
import { getCryptos, getCurrencies, getRates, getHistory, postHistory } from './middleware';
import './App.scss';
import { useMediaQuery } from "react-responsive";

async function getCryptosPromise() {
  return await getCryptos();
};

async function getCurrenciesPromise() {
  return await getCurrencies();
};

async function getRatesPromise() {
  return await getRates();
};

async function getHistoryPromise(sort, currentPage, filter) {
  return await getHistory(sort, currentPage, filter);
};

/**
 * @description Main app render
 * @returns {JSX}
 */
function App() {
  // Constants that check is the screen is responsive
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });
  // Hook that save the current page into the historical table
  const [currentPage, setCurrentPage] = useState(0);
  // Hook that sort the column selected
  const [sort, setSort] = useState("date-");
  // If the sort or page changes
  useEffect(() => {
    getHistoryPromise(sort, currentPage).then((response) => {
      setHistory(response.result);
      setTotal(response.total);
    });
  }, [sort, currentPage]);
  // Hook that save the cryptos from the API
  const [cryptos, setCryptos] = useState();
  // If the cryptos array doesn't exist then call the GET function
  useEffect(() => {
    if (!cryptos) {
      getCryptosPromise().then((response) => {
        setCryptos(response);
      });
    }
  }, [cryptos]);
  // Hook that save the currencies from the API
  const [currencies, setCurrencies] = useState();
  // If the currencies array doesn't exist then call the GET function
  useEffect(() => {
    if (!currencies) {
      getCurrenciesPromise().then((response) => {
        setCurrencies(response);
      });
    }
  }, [currencies]);
  // Hook that save the rates from the API
  const [rates, setRates] = useState();
  // If the rates array doesn't exist then call the GET function
  useEffect(() => {
    if (!rates) {
      getRatesPromise().then((response) => {
        setRates(response);
      });
    }
  }, [rates]);

  // Hook that save the history from the API
  const [history, setHistory] = useState();
  // Hook that save the total history from the API
  const [total, setTotal] = useState(0);
  // If the history array doesn't exist then call the GET function
  useEffect(() => {
    if (!history) {
      getHistoryPromise(sort, 0).then((response) => {
        setHistory(response.result);
        setTotal(response.total);
      });
    }
  }, [history, sort]);
  // Hook that show the popup after submit the exchange
  const [exchangeSubmitted, setExchangeSubmitted] = useState(false);
  useEffect(() => {
    if (exchangeSubmitted) {
      setTimeout(() => {
        setExchangeSubmitted(false);
      }, 10000);
    }
  }, [exchangeSubmitted]);
  /**
   * @description Function that create the new history
   * @param {Object} history Object of history
   */
  const handleOnSave = (history) => {
    postHistory(sort, setCurrentPage, history, setHistory, setTotal, setExchangeSubmitted);
  };

  /**
   * @description Function that filter the history table
   * @param {Object} filter Object with type and date ranges for the filter
   */
  const handleOnFilter = (filter) => {
    getHistoryPromise(sort, 0, filter).then((response) => {
      setHistory(response.result);
      setTotal(response.total);
    });
  }

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
      {history && total > 0 ? (
        <History
          isMobile={isMobile}
          data={history}
          sort={sort}
          setSort={setSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={total}
          setFilter={handleOnFilter}
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
