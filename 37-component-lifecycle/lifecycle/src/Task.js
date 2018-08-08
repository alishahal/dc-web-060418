import React from 'react'

class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done //setting up initial state
    }
    console.warn(`Task ${this.props.task.id} constructor`)
  }

  windowResize(){
    console.log("resized")
  }

  componentDidMount(){
    window.addEventListener('resize', this.windowResize)
    console.warn(`Task ${this.props.task.id} did mount`)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} did update`)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.windowResize)
    console.warn(`Task ${this.props.task.id} will unmount`)
  }

  onChecked = () => {
    this.patchFetch()

  }

  patchFetch(){
    fetch(`http://localhost:3000/tasks/${this.props.task.id}`, {
      method: "PATCH",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        done: !this.state.done
      })
    }).then(response => response.json())
    .then(json => {
      // console.log(json)
      this.setState({
        done: !this.state.done
      })
    })
  }

  render(){
    console.warn(`Task ${this.props.task.id} render`)
    return(
      <div>
        <button onClick={() => {this.props.onDelete(this.props.task.id)}}>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={this.onChecked}/>
      </div>
    )
  }
}

export default Task
