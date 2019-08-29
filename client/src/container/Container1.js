import React, { Component } from "react";

class Container1 extends Component {
  state = {
    value: ""
  };

  handleChange = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault(console.log(this.state.value));
  };

  render() {
    return (
      <div>
        {this.state.value}
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input id="name" onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Container1;
