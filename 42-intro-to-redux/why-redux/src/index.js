import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";

// state for our application
// keys? types of values?
// count: integer (starts at 0)

// what actions should change the value? (how)
// increment, decrement

// INCREMENT_COUNT (should increment the count)
// DECREMENT_COUNT (should decrement the count)

const reducer = (
  currentState = {
    count: 0
  },
  action
) => {
  // gets called when we first create the store
  // with an init action
  // switch - convention
  // console.log(currentState, action);

  let newState;
  switch (action.type) {
    case "INCREMENT_COUNT":
      newState = {
        count: currentState.count + action.payload.amount
      };
      break;
    case "DECREMENT_COUNT":
      newState = {
        count: currentState.count - action.payload.amount
      };
      break;
    default:
      newState = currentState;
  }
  return newState;
};

// needs a reducer
const store = createStore(reducer);

class App extends Component {
  increment = () => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
    store.dispatch({ type: "INCREMENT_COUNT", payload: { amount: 1 } });
  };

  incrementBy5 = () => {
    store.dispatch({ type: "INCREMENT_COUNT", payload: { amount: 5 } });
  };

  decrement = () => {
    // this.setState(prevState => ({ count: prevState.count - 1 }));
    store.dispatch({ type: "DECREMENT_COUNT", payload: { amount: 1 } });
  };

  decrementBy5 = () => {
    store.dispatch({ type: "DECREMENT_COUNT", payload: { amount: 5 } });
  };

  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count +
      upToNext}`;
  };

  // gross hack, prefer not to use it
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  // is the new state getting saved?
  // are the actions getting dispatch?
  // react doesn't know to rerender
  // when does react rerender?
  // - state change
  // - props change
  // - forceUpdate

  render() {
    return (
      <div className="App">
        <Header description={this.renderDescription()} />
        <Counter
          count={store.getState().count}
          increment={this.increment}
          decrement={this.decrement}
          increment5={this.incrementBy5}
          decrement5={this.decrementBy5}
        />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.description}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement5}> - 5 </button>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        <button onClick={this.props.increment5}> + 5</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
