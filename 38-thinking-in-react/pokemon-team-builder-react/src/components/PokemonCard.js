import React from 'react'

const PokemonCard = ({pokemon, handleDoubleClick, handleSingleClick}) => {
  return(
    <div className="card pokemon"
      onDoubleClick={() => {handleDoubleClick(pokemon)}}
      onClick={() => {handleSingleClick(pokemon.url)}}
    >
      {pokemon == null ? null : pokemon.name}
    </div>
  )
}

export default PokemonCard
