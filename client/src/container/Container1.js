import React, { Component } from "react";
import Component1 from "../functional/component1";

import * as ACTION_TYPES from "../store/actions/Actions";
import * as ACTIONS from "../store/actions/Actions";

import { connect } from "react-redux";

class Container1 extends Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.stateprop1)}>
          Get State
        </button>
        <button onClick={() => this.props.action1()}>Dispatch action 1</button>
        <button onClick={() => this.props.action2()}>Dispatch action 2</button>
        <button onClick={() => this.props.action_creator1()}>
          Dispatch Action Creator 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          Dispatch Action Creator 2
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container1);
