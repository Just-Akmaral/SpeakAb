import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RegisterForm extends Component {
  static defaultProps = {
    submitBtnLabel: "Create new account"
  };
  render() {
    return (
      <form onSubmit={this.props.submitAction}>
        <input
          placeholder="Name"
          type="text"
          id="usr"
          className="form-control"
        />
        <input
          placeholder="Email"
          type="email"
          id="email"
          className="form-control"
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          {this.props.submitBtnLabel}
        </button>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  submitAction: PropTypes.func.isRequired
};
