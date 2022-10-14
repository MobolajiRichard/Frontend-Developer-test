import React from 'react'
import { IconButton } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'

const SearchBox = ({value, searchInputChange, onSubmit}) => {
  return (
    <>
        <IconButton onClick={onSubmit} sx={{color:'#FBAF00'}}>
         <SearchOutlined />
        </IconButton>
        <input value={value} onChange={searchInputChange} className='search__input'/>
    </>
  )
}

export default SearchBox