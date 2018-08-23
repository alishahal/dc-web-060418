import React from "react";
import logo from "../logo.svg";
import { connect } from "react-redux";
import Counter from "./Counter";

const Header = ({ description }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{description}</h1>
    <Counter />
  </header>
);

const mapStateToProps = ({ count }) => {
  const remainder = count % 5;
  const upToNext = 5 - remainder;
  const description = `The current count is less than ${count + upToNext}`;
  return {
    description: description
  };
};

export default connect(mapStateToProps)(Header);
