import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCollection from './HogCollection'
import Filter from './Filter'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sort: "all",
      greased: false
    }
  }

  handleChange = (e) =>{
    console.log(e.target.value)
    if(e.target.value=== "greased"){
      this.setState({greased: !this.state.greased}, () => console.log(this.state.greased))
    }else{
      this.setState({sort: e.target.value}, () => console.log(this.state.sort))
    }
  }

  sortHogs = (hogs)=>{
    switch (this.state.sort) {
      case "name":
        return [...hogs].sort((a,b)=>a.name.localeCompare(b.name))
        break;
      case "weight":
          return [...hogs].sort((a,b)=>b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          break;
      default:
        return hogs
    }
  }

  handleGrease = () =>{
    if(this.state.greased === true){
      return hogs.filter((hog)=>hog.greased===true )
    }else{
      return hogs
    }
  }

  applyFilters = ()=>{
    return this.sortHogs(this.handleGrease())
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleChange={this.handleChange}/>
          < HogCollection hogs= {this.applyFilters()}/>
      </div>
    )
  }
}

export default App;
