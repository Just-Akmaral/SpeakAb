import React, { Component } from 'react';
import App from '../../imports/ui/App.jsx';
import AppHeader from './layout/AppHeader.jsx';
import { createContainer } from 'meteor/react-meteor-data';

class Home extends Component {

  static defaultProps = {
      appTitle: 'SpeakAbility'
    }

  showUserNav(){
      return (
        <div>
                <nav className="header__nav header__nav--lp">
                  <ul className="float-left">
                    <li><a href="#" className="logo">{this.props.appTitle}</a></li>
                  </ul>
                  <ul className="float-right">
                    <li><a href="/login">Sign in</a></li>
                    <li><a href="/register" className="btn btn-primary btn-cta signup">Sign up</a></li>
                  </ul>
                </nav>
                <section className="header__cta">
                  <h1 className="header__title title">Train your speaking skills</h1>
                  <h3 className="header__subtitle">By completing voice quests on out platform</h3>
                  <a href="/login" className="btn btn-primary btn-cta btn-cta--header">Try demo for free</a>
                </section>
                <div className="header__lang">
                  <p>We support american english language now</p>
                  <span className="icon-flag icon-flag--usa"></span>
                </div>
        </div>
      );
  }

  showUserNav_login() {
        return (
          <nav className="header__nav header__nav--app">
            <ul className="float-left">
              <li><a href="/Dashboard" className="logo">{this.props.appTitle}</a></li>
            </ul>
            <ul className="float-right">
              <li className="profile">
                <img src="/images/profile-pic.svg" alt="profile-pic" className="pic"/>
                <span className="name">{currentUser.username}</span>
                <ul className="menu">
                  <li><a href="/logout">Logout</a></li>
                </ul>
              </li>
            </ul>
        </nav>);
  }

  render() {
      currentUser = Meteor.user();
      return (
        <div>
          <AppHeader appClass = {currentUser ? "header--app": "header--lp"} userNav = {currentUser ? this.showUserNav_login() : this.showUserNav()} />
             {this.props.content}
        </div>
      );
   }
}


export default createContainer(() => {
    let subscription = Meteor.subscribe("userData");
    let sub = subscription.ready();

    Meteor.subscribe("quests");
    Meteor.subscribe("scenario");

    return { sub: sub };
}, Home);
