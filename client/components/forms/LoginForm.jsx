import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LoginForm extends Component {
  static defaultProps = {
    submitBtnLabel: "Sign in"
  };
  render() {
    return (
      <form onSubmit={this.props.submitAction}>
        <input placeholder="Email" type="email" id="email" />
        <input placeholder="Password" type="password" id="password" />
        <button type="submit" className="btn btn-primary">
          {this.props.submitBtnLabel}
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submitAction: PropTypes.func.isRequired
};
