import React from "react";
import { connect } from "react-redux";
import { showPokemonDetails } from "../redux/action";

const PokemonCard = ({ pokemon, handleDoubleClick, showPokemonDetails }) => {
  return (
    <div
      className="card pokemon"
      onDoubleClick={() => {
        handleDoubleClick(pokemon);
      }}
      onClick={() => {
        if (pokemon.url) {
          showPokemonDetails(pokemon.url);
        }
      }}
    >
      {pokemon == null ? null : pokemon.name}
    </div>
  );
};

export default connect(
  null,
  { showPokemonDetails }
)(PokemonCard);
