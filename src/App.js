import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Metrics from "./components/Metrics";
import Awards from "./components/Awards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Metrics />
        <Awards />
      </div>
    );
  }
}

export default App;
