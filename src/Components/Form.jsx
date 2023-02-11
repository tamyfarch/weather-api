import { TextField } from '@mui/material';
import React from 'react';

const Form = ({ handleOnChange, value }) => {
  return (
    <form onSubmit={e => handleOnChange(e)}>
      <button type="submit">Buscar</button>
      <TextField name="city" value={value} label="Search" variant="outlined" sx={{ borderBlockColor: "white", borderBlockStyle: "solid", borderBlockWidth: "10px" }} />
    </form>
  )
}
export default Form
