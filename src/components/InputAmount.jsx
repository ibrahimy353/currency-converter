import { Grid, InputAdornment, TextField } from "@mui/material"

function InputAmount() {
  return (
    <Grid item xs='12' md> 
    {/* median md gets to fill the available space thus being responsiveIbra */}
        <TextField 
        label='Amount'
        fullWidth
        InputProps={{
            type: 'number',
            startAdornment: <InputAdornment position='start'> $ </InputAdornment>
        }}
        />
    </Grid>
    )
}

export default InputAmount