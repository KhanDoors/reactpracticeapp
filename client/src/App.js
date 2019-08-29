import React, { Component } from "react";
import "./App.css";
import Container1 from "./container/Container1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <Container1 />
        </header>
      </div>
    );
  }
}

export default App;
