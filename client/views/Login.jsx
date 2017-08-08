import React, { Component } from 'react';
import LoginForm from '../components/forms/LoginForm.jsx';

export default class Login extends Component {

  static defaultProps = {
		registerLink: <a href="/register" className="login__register">Sign up</a>
  }

  loginWithPassword(e) {
    e.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val().trim();

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
      	alert("there was an error: " + error.reason);
        console.log("There was an error:" + error.reason);
      } else {
         FlowRouter.go('Dashboard');
       }
  });
 }

  render() {
    return (
      <main className = "container">
        <div className = "sign sign__in clearfix">
          <h1 className = "sign__title logo">SpeakAbility</h1>
          <LoginForm submitBtnLabel="Login" submitAction={this.loginWithPassword} />
          {this.props.registerLink}
        </div>
      </main>
    );
  }
}
