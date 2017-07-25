import React, { Component } from 'react';
import App from '../../imports/ui/App.jsx';
import AppHeader from './layout/AppHeader.jsx';
import { createContainer } from 'meteor/react-meteor-data';

class Home extends Component {

  showUserNav(){
      return (
        <div>
                <form action="/register" method="get">
                  <button className="link">Sign up</button>
                </form>
                <form action="/login" method="get">
                  <button className="link">Sign in</button>
                </form>
        </div>
      );
  }

  showUserNav_login() {
        return (
          <div className="header__profile">
            <img src="/images/profile-pic.png" alt="profile-pic" className="header__pic"/>
                <span className="header__name">{currentUser.username}</span>
                <ul action="/logout" method="get" className="header__menu">
                  <li><a href="#">Выйти</a></li>
                </ul>
                </div>);
  }

  render() {
      currentUser = Meteor.user();
      return (
        <div>
          <AppHeader appTitle="SpeakAbility" userNav = {currentUser ? this.showUserNav_login() : this.showUserNav()} />
           <main>
             {this.props.content}
           </main>
       </div>
      );
   }
}


export default createContainer(() => {
    let subscription = Meteor.subscribe("userData");
    let sub = subscription.ready();
    Meteor.subscribe("quests");
    return { sub: sub };
}, Home);
