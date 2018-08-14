import React from 'react'
import Painting from './Painting'

const PaintingsList = ({filterTerm, paintings}) => {
  let filteredPaintings = paintings.filter((painting) => painting.title.includes(filterTerm))
  return(
    filteredPaintings.map(painting => <Painting
      key={painting.id}
      painting={painting}
    />)
  )
}

export default PaintingsList
