import { Grid, InputAdornment, TextField } from "@mui/material"

function InputAmount() {
  return (
    <Grid item>
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