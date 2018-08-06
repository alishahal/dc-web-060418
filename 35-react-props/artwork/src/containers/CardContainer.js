import React from 'react'
import Card from '../components/Card'
import paintings from '../data/paintings'

// const paintings = [
//   {id:1, name:"painting1"},
//   {id:2, name:"painting2"},
//   {id:3, name:"painting3"}
// ]

const CardContainer = () => {
  return (
    <div>{paintings.map(painting =>
      <Card
        key={painting.id}
        painting={painting}
      />
    )}</div>
  )
}

export default CardContainer
