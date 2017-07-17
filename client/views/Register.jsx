import React, { Component } from 'react';

import RegisterForm from '../components/forms/RegisterForm.jsx';

export default class Register extends Component {
	static defaultProps = {
			loginLink: <p> "Already have an account?" <a href="/login">Sign In</a></p>
	}

	createUser(e) {
		e.preventDefault();
		console.log("1");
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
	          FlowRouter.go('Loginpage');
					};
				});
 }

  render() {
    return (
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<h1>Register</h1>
						<RegisterForm
							submitBtnLabel="Register"
							submitAction={this.createUser}/>
					 {this.props.loginLink}
				</div>
			</div>
		);
  }
}
