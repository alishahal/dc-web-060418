import React from 'react'

const Searchbar = (props) => {
  // console.log(props)
  return(
    <input type="text" onChange={props.onChangeHandler}/>
  )
}

export default Searchbar
