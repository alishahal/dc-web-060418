import React, { Component } from "react";
import "../App.css";
import PokemonDetails from "../components/PokemonDetails";
import Searchbar from "../components/Searchbar";
import { TeamList, AllList } from "./PokemonList";
import { connect } from "react-redux";
import { onClear, loadPokemon } from "../redux/action";

// const URL = 'http://localhost:3000/pokemon'

class App extends Component {
  componentDidMount() {
    this.props.loadPokemon();
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

export default connect(
  null,
  { loadPokemon, onClear }
)(App);
