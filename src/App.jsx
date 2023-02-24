import { Button, Container, Grid, Typography } from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'


function App() {


  return (
<Container maxWidth='md' sx={{background:'#2227'}}>
    <Typography variant='h5' sx={{marginTop:'2rem'}}>
      Keep it going Ibra
    </Typography>

    <Grid Container spacing={2}>
      <InputAmount />
      <SelectCountry />
      <SwitchCurrency />
      <SelectCountry />

    </Grid>
</Container>     
    
  )
}

export default App
