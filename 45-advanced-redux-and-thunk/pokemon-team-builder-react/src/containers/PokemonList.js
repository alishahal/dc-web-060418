import React from 'react'
import PokemonCard from '../components/PokemonCard'

const PokemonList = ({pokemons, handleDoubleClick, handleSingleClick}) => {
  return(
    <div>
      {pokemons.map(pokemon => <PokemonCard
        key={pokemon.name}
        pokemon={pokemon}
        handleDoubleClick={handleDoubleClick}
        handleSingleClick={handleSingleClick}
      />)}
    </div>
  )
}

export default PokemonList
