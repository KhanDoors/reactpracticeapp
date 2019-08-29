import React, { Component } from "react";
import "./App.css";
import Component1 from "./functional/component1";
import Container1 from "./container/Container1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
          <Component1 name="Syyad" age="25" />
          <Container1 alias="Khandoor" />
        </header>
      </div>
    );
  }
}

export default App;
