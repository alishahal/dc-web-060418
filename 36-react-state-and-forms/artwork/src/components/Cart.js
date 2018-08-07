import React from 'react'

const Cart = ({painting}) => {
  console.log(painting)
  return painting === null ? null :
    (<div className="ui card">Checkout Cart
            <div><img alt={painting.title} src={painting.image}/></div>
          <p>{`${painting.title} by ${painting.artist.name}`}</p>
          <p>{painting.date}</p>
          <p>{`${painting.dimensions.width} in. x ${painting.dimensions.height}`}</p>
      </div>
    )
}

export default Cart
