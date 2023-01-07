import React, { useState, useEffect } from 'react';
import { Toolbar } from './components';
import { getCryptos } from './middleware';
import './App.scss';

async function cryptosPromise() {
  const response = getCryptos();
  return await response;
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

  return (
    <div className="container">
      {cryptos ? <Toolbar cryptos={cryptos} /> : <></>}
    </div>
  );
}

export default App;
