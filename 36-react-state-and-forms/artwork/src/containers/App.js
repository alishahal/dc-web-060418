import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import CardContainer from './CardContainer'
import Searchbar from '../components/Searchbar'
import Cart from '../components/Cart'
import paintings from '../data/paintings'

//title, subtitle, icon, color

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchWord: '',
      selectedPainting: null,
      masterListOfPaintings: paintings
    }
  }

  // state = {
  //   searchWord: '',
  //   selectedPainting: null
  // }

  onSearchHandler = (event) => {
    this.setState({searchWord: event.target.value})
  }

  onAddToCart = (event) => {
    let id = event.target.dataset.paintingId
    let painting = paintings.find(painting => painting.id === id)
    this.setState({
      selectedPainting: painting
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          title="Paintr"
          tagline="List of Paintings"
          icon="paint brush icon"
          color="blue"
        />
        <Cart painting={this.state.selectedPainting}/>
        <Searchbar onChangeHandler={this.onSearchHandler}/>
        <CardContainer
          paintings={paintings}
          filterTerm={this.state.searchWord}
          onCardClickHandler={this.onAddToCart}
        />
      </div>
    );
  }
}

export default App;
