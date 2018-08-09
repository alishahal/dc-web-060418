import React, { Component } from 'react';
import '../App.css';
import PokemonDetails from '../components/PokemonDetails'
import Searchbar from '../components/Searchbar'
import PokemonList from './PokemonList'

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151'
// const URL = 'http://localhost:3000/pokemon'

class App extends Component {

  constructor(){
    super()
    this.allPokemon = []
    this.state = {
      detailPokemon: null,
      currentTeam: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(response => response.json())
    .then(json => {
      this.allPokemon = json.results
      this.setState({
        detailPokemon: this.state.detailPokemon
      })
    })
  }

  addPokemonToTeam = (pokemonObj) => {
    if(this.state.currentTeam.length < 6){
      this.setState({
        currentTeam: [...this.state.currentTeam, pokemonObj]
      })
    }
  }

  getAvailablePokemon = () => {
    let filteredPokemon
    filteredPokemon = this.allPokemon.filter(pokemon => !this.state.currentTeam.includes(pokemon))
    //this.state.currentTeam
    return filteredPokemon
  }

  removePokemonFromTeam = (pokemonObj) => {
    let index = this.state.currentTeam.indexOf(pokemonObj)
    let newTeam = [...this.state.currentTeam]
    newTeam.splice(index, 1)
    this.setState({
      currentTeam: newTeam
    })
  }

  showPokemonDetails = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        detailPokemon: json
      })
    })
  }

  onSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <h3>Your Team:</h3>
        <PokemonList
          pokemons={this.state.currentTeam}
          handleDoubleClick={this.removePokemonFromTeam}
          handleSingleClick={this.showPokemonDetails}
        />
        <h4>Currently Scouting:</h4>
        <PokemonDetails pokemon={this.state.detailPokemon}/>
        <h4>Search Pokemon:</h4>
        <Searchbar
          onChange={this.onSearch}
          value={this.state.searchTerm}
        />
        <PokemonList
          pokemons={this.getAvailablePokemon().filter(pokemon => pokemon.name.includes(this.state.searchTerm))}
          handleDoubleClick={this.addPokemonToTeam}
          handleSingleClick={this.showPokemonDetails}
        />
      </div>
    );
  }
}

export default App;
