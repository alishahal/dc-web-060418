import React from 'react'
import Card from '../components/Card'

// const paintings = [
//   {id:1, name:"painting1"},
//   {id:2, name:"painting2"},
//   {id:3, name:"painting3"}
// ]

const CardContainer = (props) => {
  let {paintings} = props
  let newPaintings = paintings.filter(painting => painting.title.includes(props.filterTerm))
  return (
    <div>{newPaintings.map(painting =>
      <Card
        key={painting.id}
        painting={painting}
        onButtonClickHandler={props.onCardClickHandler}
      />
    )}</div>
  )
}

export default CardContainer
