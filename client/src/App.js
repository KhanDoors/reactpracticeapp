import React, { Component } from "react";
import "./App.css";
import Container1 from "./container/Container1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container1 />
        </header>
      </div>
    );
  }
}

export default App;
