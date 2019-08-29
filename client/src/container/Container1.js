import React, { Component } from "react";

class Container1 extends Component {
  state = {
    stateprop1: "Our initial state"
  };

  render() {
    return (
      <div>
        The {this.props.alias} {this.state.stateprop1}{" "}
      </div>
    );
  }
}

export default Container1;
