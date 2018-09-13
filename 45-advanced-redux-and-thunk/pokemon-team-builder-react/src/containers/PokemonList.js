import React from "react";
import PokemonCard from "../components/PokemonCard";
import { connect } from "react-redux";
import { addToTeam } from "../redux/action";

const PokemonList = ({ pokemons, handleDoubleClick, handleSingleClick }) => {
  return (
    <div>
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          handleDoubleClick={handleDoubleClick}
          handleSingleClick={handleSingleClick}
        />
      ))}
    </div>
  );
};

const teamMSTP = state => ({ pokemons: state.currentTeam });
const teamMDTP = dispatch => ({
  handleDoubleClick: pokemon => dispatch({ type: "REMOVE_FROM_TEAM", pokemon })
});
const TeamList = connect(
  teamMSTP,
  teamMDTP
)(PokemonList);

const allMSTP = state => ({
  pokemons: state.allPokemon.filter(
    pokemon =>
      !state.currentTeam.includes(pokemon) &&
      pokemon.name.includes(state.searchTerm)
  )
});

const allMDTP = dispatch => ({
  handleDoubleClick: pokemon => dispatch(addToTeam(pokemon))
});

const AllList = connect(
  allMSTP,
  allMDTP
)(PokemonList);

export default PokemonList;
export { AllList, TeamList };
