import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://v6.exchangerate-api.com/v6/bae7ff234eccef6ead0e40bb/latest/USD'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect (() =>{
    fetch(BASE_URL)
    .then( res => res.json())
    .then(data =>{
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })

  }, [])

  return (
      <>
      <h1>Currency Convertor</h1>
      <CurrencyRow
      currencyOptions={currencyOptions}/>
      <div className='equals'>
        =
      </div>
      <CurrencyRow 
      currencyOptions={currencyOptions}/>
      
      </> 
  
  );
}

export default App;
