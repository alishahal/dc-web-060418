import React, { Component } from "react";
import "../App.css";
import PokemonDetails from "../components/PokemonDetails";
import Searchbar from "../components/Searchbar";
import { TeamList, AllList } from "./PokemonList";
import { connect } from "react-redux";

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";
// const URL = 'http://localhost:3000/pokemon'

class App extends Component {
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(json => {
        this.props.fetchedPokemon(json.results);
      });
  }

  render() {
    return (
      <div className="App">
        <img
          alt="Pokemon"
          width="200"
          src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"
        />
        <h3>Your Team:</h3>
        <TeamList />
        <h4>Currently Scouting:</h4>
        <button onClick={this.props.onClear}> Clear!</button>
        <PokemonDetails />
        <h4>Search Pokemon:</h4>
        <Searchbar />
        <AllList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClear: () => dispatch({ type: "CLEAR" }),
    fetchedPokemon: allPokemon =>
      dispatch({ type: "FETCHED_ALL_POKEMON", allPokemon })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
