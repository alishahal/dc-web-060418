import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const activeStyle = {
  background: "black"
}

const style = {
  color: "white"
}

const NavBar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu navbar`}>
     <a className="item">
       <h2 className="ui header">
         <i className={`${props.icon} icon`}></i>
         <div className="content">{props.title}</div>
         <div className="sub header">{props.subtitle}</div>
       </h2>
     </a>
     <NavLink className="item" exact to="/" style={style} activeStyle={activeStyle}>About</NavLink>
     <NavLink className="item" to="/paintings" style={style} activeStyle={activeStyle}>Gallery</NavLink>
   </div>
  )
}

export default NavBar
