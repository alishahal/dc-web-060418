import React from 'react'

const Card = ({painting}) => {
  let {artist, dimensions} = painting
  console.log(artist)

  // console.log(props)
  return(
    <div className="ui card">
      <div><img alt={painting.title} src={painting.image}/></div>
      <p>{`${painting.title} by ${artist.name}`}</p>
      <p>{painting.date}</p>
      <p>{`${dimensions.width} in. x ${dimensions.height}`}</p>
    </div>
  )
}

export default Card;
