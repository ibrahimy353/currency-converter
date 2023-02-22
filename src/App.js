import React, {useEffect} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';
const BASE_URL = 'https://v6.exchangerate-api.com/v6/bae7ff234eccef6ead0e40bb/latest/USD'
function App() {

  useEffect (() =>{

    fetch(BASE_URL)
    .then( res => res.json())
    .then(data => console.log(data))

  }, [])

  return (
      <>
      <h1>Currency Convertor</h1>
      <CurrencyRow />
      <div className='equals'>
        =
      </div>
      <CurrencyRow />
      </> 
  
  );
}

export default App;
