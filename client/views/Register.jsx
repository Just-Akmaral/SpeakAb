import React, { Component } from 'react';
import RegisterForm from '../components/forms/RegisterForm.jsx';

export default class Register extends Component {
	static defaultProps = {
			loginLink: <a href="/login" className="sign__link">Sign in</a>

	}

	createUser(e) {
		e.preventDefault();
	    const email = $('#email').val();
	    const password = $('#password').val().trim();
	    const name = $('#usr').val();

	    Accounts.createUser(
	      {
	        email: email,
	        password: password,
	        username: name
	      },
	      function(error) {
	        if (error) {
	        	alert("there was an error: " + error.reason);
	          console.log("there was an error: " + error.reason);
	        } else {
	          FlowRouter.go('Dashboard');
					};
				});
 }

  render() {
    return (
    	  <main className = "container clearfix">
			<div className="sign sign__up clearfix">
				<h1 className="sign__title logo">SpeakAbility</h1>
				<RegisterForm
					submitBtnLabel="Register"
					submitAction={this.createUser}/>
				{this.props.loginLink}
			</div>
		</main>	
		);
  }
}
