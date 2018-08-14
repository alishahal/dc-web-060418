import React, { Component } from 'react'
import { render } from 'react-dom'

export default class CubeMover extends Component {
  constructor() {
    super()
    this.state = {
      active: true,
    }
  }

  render() {
    const cssClasses = `cubemover cube-mover-${this.props.destinationName}`
    return (
      <h4 className={cssClasses} onClick={this.props.onClick} onKeyDown={this.props.onKeyDown}></h4>
    )
  }
}
