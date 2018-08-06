import React from 'react'

const Navbar = (props) => {
  // console.log(props)
  return(
    <div className={`ui inverted ${props.color} menu navbar`}>
     <a className="item">
       <h2 className="ui header">
         <i className={props.icon}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.tagline}</div>
       </h2>
     </a>
    </div>
  )
}

export default Navbar
