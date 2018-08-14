import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar'
import PaintingsList from './PaintingsList'
import Searchbar from './Searchbar'
import PaintingDetails from './PaintingDetails'
import About from  './About'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.paintings = []
    this.state = {
        searchTerm: ''
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(json => {
      this.paintings = json;
      this.setState({
        searchTerm: this.state.searchTerm
      })
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <NavBar title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Route exact path="/" component={About}/>
        <Switch>
          <Route path='/paintings/:id' render={(props) => {
            let paintingId = props.match.params.id
            return <PaintingDetails painting={this.paintings.find(painting => painting.id === paintingId)}/>
          }} />
          <Route path='/paintings' render={() => {
            return (<div>
              <Searchbar onChangeHandler={this.onSearchHandler} value={this.state.searchTerm}/>
              <PaintingsList
                filterTerm={this.state.searchTerm}
                paintings={this.paintings}
              />
            </div>)
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
