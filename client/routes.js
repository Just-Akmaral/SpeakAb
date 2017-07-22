import React, { Component } from 'react';
import Home from './components/Home.jsx';
import Homepage from './views/Homepage.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import App from '../imports/ui/App.jsx';


// import Map from './components/Map.jsx';
//
// FlowRouter.route('/map', {
//   name: 'map',
//   action: function() {
//     mount(Home, {
//       content: <Map />
//     });
//   }
// });


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
