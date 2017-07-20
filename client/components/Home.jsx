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
        return (<div>
                <h1>{currentUser.username}</h1>
                <form action="/logout" method="get">
                  <button className="link">Log out</button>
                </form>
                </div>);
  }

  render() {
      currentUser = Meteor.user();
      return (
        <div className="app-container">
          <AppHeader appTitle="SpeakAbility" userNav = {currentUser ? this.showUserNav_login() : this.showUserNav()} />
           <main className="container">
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
