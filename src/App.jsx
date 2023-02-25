import {Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { CurrencyContext } from './context/CurrencyContext'


function App() {

  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  } = useContext(CurrencyContext)
  const [resultCurrency, setResultCurrency] = useState(0);
console.log(resultCurrency)
  useEffect(() =>{
    if(firstAmount){
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey:"IASMeyaNlt3MTGtCuVCheP267BVXqCEAWB3OFSOR",
          base_currency: "USD",
          currencies:"EUR"
        }
      })
      .then(response => setResultCurrency(response.data))
      .catch(error => console.log(error))
    }

  }, [firstAmount])

  const boxStyle ={
    background: '#fdfdfd',
    marginTop: '10%',
    textAlign: 'center',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '4rem 2rem',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.5)',
    position: 'relative'
  }

  return (
<Container maxWidth='md' sx={boxStyle}>
    <Typography variant='h5' sx={{marginBottom:'2rem'}}>
      Get the Accurate Conversion Stop Guessing!!
    </Typography>

    <Grid container spacing={2} >
      <InputAmount />
      <SelectCountry value={fromCurrency} setValue={setFromCurrency} label='from'/>
      <SwitchCurrency />
      <SelectCountry value={toCurrency} setValue={setToCurrency} label='To'/>

    </Grid>
</Container>     
    
  )
}

export default App
