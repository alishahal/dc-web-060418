import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToTeam } from "../redux/action";

const PokemonDetails = ({ pokemon, addToTeam, currentlyFetching }) => {
  if (currentlyFetching) {
    return "Loading...";
  }
  return (
    <div className="card details">
      Pokemon Details{pokemon == null ? null : (
        <div>
          <div className="row">{pokemon.name.toUpperCase()}</div>
          <div className="row">
            <div>
              <img alt="" src={pokemon.sprites.front_default} />
            </div>
            <div className="block">{`${pokemon.stats[0].stat.name}: ${
              pokemon.stats[0].base_stat
            }`}</div>
            <div className="block">{`${pokemon.stats[1].stat.name}: ${
              pokemon.stats[1].base_stat
            }`}</div>
            <div className="block">{`${pokemon.stats[2].stat.name}: ${
              pokemon.stats[2].base_stat
            }`}</div>
            <div className="block">{`${pokemon.stats[3].stat.name}: ${
              pokemon.stats[3].base_stat
            }`}</div>
            <div className="block">{`${pokemon.stats[4].stat.name}: ${
              pokemon.stats[4].base_stat
            }`}</div>
            <div className="block">{`${pokemon.stats[5].stat.name}: ${
              pokemon.stats[5].base_stat
            }`}</div>
          </div>
          <button onClick={() => addToTeam(pokemon)}>Add To Team</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ detailPokemon, currentlyFetching }) => ({
  pokemon: detailPokemon,
  currentlyFetching
});

// const addToTeam = pokemon => ({
//  type: "ADD_TO_TEAM",
//  pokemon
// });

// const mapDispatchToProps = dispatch => ({
// addToTeam: (...args) => dispatch(addToTeam(...args))
// });

// const mapDispatchToProps = dispatch =>
// bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  { addToTeam }
)(PokemonDetails);
