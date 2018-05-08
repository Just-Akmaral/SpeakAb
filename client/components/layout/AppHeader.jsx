import React, { Component } from "react";

export default class AppHeader extends Component {
  static defaultProps = {
    appClass: "",
    userNav: null
  };

  render() {
    return (
      <header className={"header " + this.props.appClass}>
        <div className="container clearfix">{this.props.userNav}</div>
      </header>
    );
  }
}
