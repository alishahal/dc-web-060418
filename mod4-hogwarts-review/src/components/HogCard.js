import React, {Component} from 'react';


export default class HogCard extends Component{
  constructor(props){
    super(props)
    this.state= {clicked: false}
  }

  handleClick = (e) =>{
    this.setState({clicked: !this.state.clicked})
  }
  findHogImage=(hog)=>{
      let name = hog.name.split(' ').join('_').toLowerCase()
      let fileName = require(`../hog-imgs/${name}.jpg`)
      console.log('returning', fileName)
      return fileName
  }

  render(){
    const {name, specialty, greased} = this.props.hog
    const weight = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    const medal = this.props.hog['highest medal achieved']
    // const fileName = this.props.image
    return(
      <div className='pigTile'>
        <h1>{name}</h1>
        <img src={this.findHogImage(this.props.hog)} alt={name} />
        <button onClick={this.handleClick}>{this.state.clicked ? "Hide Details": "More Details"}</button>
        {this.state.clicked ?
        <div className="details">
          <h2>{specialty}</h2>
          <p>{`${greased}`}</p>
          <p>{weight}</p>
          <p>{medal}</p>
        </div> : null }
      </div>
    )
  }
}
