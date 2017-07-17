import React, { Component } from 'react';

import Home from './components/Home.jsx';

import {mount} from 'react-mounter';

import Homepage from './views/Homepage.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';

import App from '../imports/ui/App.jsx';

FlowRouter.route('/', {
  name: 'home',
  action: function() {
     mount(Home, {
       content: <Homepage />
     });

  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    mount(Home, {
      content: <Login />
    });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action: function() {
    mount(Home, {
      content: <Register />
    });
  }
});

FlowRouter.route('/Loginpage', {
  name: 'Loginpage',
  action: function() {
    mount(Home, {
      content: <App />
    });
  }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action: function() {
    Meteor.logout(function(){
      FlowRouter.go('home');
        });
  }
});

FlowRouter.notFound = {
  action: function() {
   FlowRouter.go('home');
  }
};
