import React from 'react'

const Card = (props) => {
  let {painting} = props
  let {artist, dimensions} = painting
  // console.log(artist)

  // console.log(props)
  return(
    <div className="ui card">
      <div><img alt={painting.title} src={painting.image}/></div>
      <p>{`${painting.title} by ${artist.name}`}</p>
      <p>{painting.date}</p>
      <p>{`${dimensions.width} in. x ${dimensions.height}`}</p>
      <button
        onClick={props.onButtonClickHandler}
        data-painting-id={painting.id}
      >Add To Cart</button>
    </div>
  )
}

export default Card;
