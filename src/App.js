import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Metrics from "./components/Metrics";
import Awards from "./components/Awards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadCompleted: false
    };
  }
  componentDidMount = () => {
    window.addEventListener("load", () => {
      this.setState({
        isLoadCompleted: true
      });
    });
  };
  render() {
    const { isLoadCompleted } = this.state;
    return (
      <div className="App">
        <Logo on={isLoadCompleted} />
        <Metrics on={isLoadCompleted} />
        <Awards on={isLoadCompleted} />
      </div>
    );
  }
}

export default App;
