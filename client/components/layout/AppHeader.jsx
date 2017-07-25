import React, { Component } from 'react';


export default class AppHeader extends Component {

  static defaultProps = {
      appTitle: "",
      userNav: null
    }

render() {
    return (
        <header className = "header">
            <div className = "container clearfix">
              <a href="/Dashboard" className="header__logo">{this.props.appTitle}</a>
              {this.props.userNav}
            </div>
        </header>
    )
  }
}
