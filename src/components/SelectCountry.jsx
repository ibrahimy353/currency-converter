import { Autocomplete, Grid, TextField } from "@mui/material"
import useAxios from "../hooks/useAxios"

function SelectCountry() {
    const [data] = useAxios("https://restcountries.com/v3.1/all");

    const dataFilter = data.filter(item => "currencies" in item);
    const dataCountries = dataFilter.map(item =>{
        return `${item.flag} ${Object.keys(item.currencies)[0]}-${item.name.common}`
    });
    console.log(dataCountries)

  return (
    <Grid item xs='12' md={3}>
        <Autocomplete
            value='option1'
            options={dataCountries}
            renderInput={(params) => <TextField {...params} label='from'/>}
        />
            
    </Grid>
    )
}

export default SelectCountry