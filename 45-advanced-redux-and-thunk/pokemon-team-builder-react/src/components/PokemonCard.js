import React from "react";
import { connect } from "react-redux";

const PokemonCard = ({ pokemon, handleDoubleClick, handleSingleClick }) => {
  return (
    <div
      className="card pokemon"
      onDoubleClick={() => {
        handleDoubleClick(pokemon);
      }}
      onClick={() => {
        handleSingleClick(pokemon.url);
      }}
    >
      {pokemon == null ? null : pokemon.name}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  const showPokemonDetails = url => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        // need an action
        dispatch({
          type: "CHANGE_DETAIL_POKEMON",
          detailPokemon: json
        });
      });
  };

  return { handleSingleClick: showPokemonDetails };
};

export default connect(
  null,
  mapDispatchToProps
)(PokemonCard);
