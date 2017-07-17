import React, { Component } from 'react';


export default class AppHeader extends Component {

  static defaultProps = {
      appTitle: "",
      userNav: null
    }

render() {
    return (
        <div id="header">
          <h1>{this.props.appTitle}</h1>
          {this.props.userNav}
        </div>
    )
  }
}
