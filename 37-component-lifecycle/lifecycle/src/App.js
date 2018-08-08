import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

// const sampleTasks = [
//   {id:1, text: "wake up", done: true},
//   {id:2, text: "eat lunch", done: false},
//   {id:3, text: "go to sleep", done: false}
// ]

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: null
    }
    console.warn(`App constructor`)
  }

  componentDidMount(){
    console.warn(`App did mount`)
    this.getFetch()
  }

  componentDidUpdate(){
    console.warn(`App did update`)
  }

  getFetch(){
    fetch(`http://localhost:3000/tasks`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        taskList: json
      })
    })
  }

  deleteFetch = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      // this.getFetch()
      let newArray = [...this.state.taskList]
      let index = newArray.findIndex(task => task.id === id)
      newArray.splice(index, 1)
      this.setState({
        taskList: newArray
      })
    })
  }

  postFetch(){
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type" :"application/json"
      },
      body: JSON.stringify({
        text: this.state.formText,
        done: false
      })
    })
    .then(response => response.json())
    .then(json => {
      // this.getFetch()
      this.setState({
        taskList: [...this.state.taskList, json]
      })
    })
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    this.postFetch()
  }

  render() {
    console.warn(`App render`)
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList tasks={this.state.taskList} onDelete={this.deleteFetch}/>
      </div>
    );
  }
}

export default App;
