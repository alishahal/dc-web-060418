import React from 'react'

const Searchbar = (props) => {
  return(
    <input id="search" type="text" onChange={props.onChange} value={props.value}/>
  )
}

export default Searchbar
