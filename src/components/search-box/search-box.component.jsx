import React from 'react'


//CSS Import
import './search-box.styles.css'


const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
  />
)



export default SearchBox