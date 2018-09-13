import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrementBy5}> - 5 </button>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        <button onClick={this.props.incrementBy5}> + 5</button>
      </div>
    );
  }
}

// higher-order component
// function that operates on components and returns components

// need mapStateToProps
const mapStateToProps = state => {
  return {
    // if there multiple keys in the state, we can select pieces of it
    count: state.count
  };
};

const mapDispatchToProps = send => {
  return {
    increment: () => {
      // this.setState(prevState => ({ count: prevState.count + 1 }));
      send({ type: "INCREMENT_COUNT", payload: { amount: 1 } });
    },
    incrementBy5: () => {
      send({ type: "INCREMENT_COUNT", payload: { amount: 5 } });
    },
    decrement: () => {
      // this.setState(prevState => ({ count: prevState.count - 1 }));
      send({ type: "DECREMENT_COUNT", payload: { amount: 1 } });
    },
    decrementBy5: () => {
      send({ type: "DECREMENT_COUNT", payload: { amount: 5 } });
    }
  };
};

// psuedo connect
// const connect(mstp, mdtp, options) => {
//   return (ComponentToDecorate) => {
//     return  <ComponentToDecorate {...mdtp(this.context.store.dispatch)} {...mstp(this.context.store.getState()} />
//   }
// }

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default ConnectedCounter;
