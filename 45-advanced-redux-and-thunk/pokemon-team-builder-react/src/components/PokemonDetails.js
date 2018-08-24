import React from "react";
import { connect } from "react-redux";

const PokemonDetails = ({ pokemon }) => {
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
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ detailPokemon }) => ({ pokemon: detailPokemon });

export default connect(mapStateToProps)(PokemonDetails);
