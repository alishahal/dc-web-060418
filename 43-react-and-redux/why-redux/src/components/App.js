import React, { Component } from "react";

import Counter from "./Counter";
import Header from "./Header";

class App extends Component {
  // gross hack, prefer not to use it
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
