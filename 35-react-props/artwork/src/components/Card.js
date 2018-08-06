import React from 'react'

const Card = (props) => {
  console.log(props)
  return(
    <div className="ui card">
      <div><img src={props.painting.image}/></div>
      <p>{`${props.painting.title} by ${props.painting.artist.name}`}</p>
      <p>{props.painting.date}</p>
      <p>{`${props.painting.dimensions.width} in. x ${this.props.painting.dimensions.height}`}</p>
    </div>
  )
}

export default Card;
