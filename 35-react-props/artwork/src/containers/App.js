import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import CardContainer from './CardContainer'

//title, subtitle, icon, color

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          title="Paintr"
          tagline="List of Paintings"
          icon="paint brush icon"
          color="blue"
        />
        <CardContainer />
      </div>
    );
  }
}

export default App;
