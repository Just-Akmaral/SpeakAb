import React, { Component } from 'react';
import App from '../../imports/ui/App.jsx';
import AppHeader from './layout/AppHeader.jsx';
import { createContainer } from 'meteor/react-meteor-data';



class Home extends Component {

  showUserNav(){
      return (
        <div>
                <form action="/register" method="get">
                <button className="link">Signup</button>
                </form>
                <form action="/login" method="get">
                <button className="link">Login</button>
                </form>
        </div>
      );
  }

  showUserNav_login() {
        return (<div>
                <h1> Welcome {currentUser.username} </h1>
                <form action="/logout" method="get">
                <button className="link">logout</button>
                </form>
                </div>);
  }

render() {

    currentUser = Meteor.user();

    return (
      <div className="app-container">
      <AppHeader appTitle="My Awesome Donut App" userNav =
      {currentUser ? this.showUserNav_login() : this.showUserNav()} />
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
    Meteor.subscribe("donuts");
    Meteor.subscribe("donuts_menu");
    return { sub: sub };
}, Home);
