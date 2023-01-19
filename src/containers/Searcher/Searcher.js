import React, { useState } from 'react'
import {Stack, TextField, IconButton, colors} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
// import { lightGreen } from '@mui/material/colors';


const Searcher = ({inputUser, setInputUser}) => {
  const [valueInput, setValueInput] = useState(inputUser)

  const onSearchValueChange = (e) => {
    const inputValue = e.target.value
    setValueInput(inputValue)
    // console.log("inputValue", inputValue);
  }
  const handleSubmit = () => {
    setInputUser(valueInput)
    // console.log('valueInput', valueInput);
  }
  return (
    <Stack 
      direction= 'row'
      sx={{
        margin: '25px',
        width:'100%',
        // textAlign: 'left',
    }}> 
      <TextField
        id="outlined-basic"
        label="GutHub User"
        value= {valueInput}
        variant="outlined"
        placeholder='Search a GitHub user' 
        size="small" 
        onChange={onSearchValueChange}
        sx={{
          width: '90%'
        }}
      />
      <IconButton 
          onClick={handleSubmit}
          sx={{
            backgroundColor:'lightGreen',
            left: '-41px'}}
      >
        <SearchIcon/>
      </IconButton>

    </Stack>
  )
}

export default Searcher