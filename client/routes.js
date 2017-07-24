import React, { Component } from 'react';
import {mount} from 'react-mounter';
import Home from './components/Home.jsx';
import Homepage from './views/Homepage.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import App from '../imports/ui/App.jsx';

import Map from './views/Map.jsx';
import Introduction from './views/Introduction.jsx';

FlowRouter.route('/Introduction/:city_id/:location_name', {
  name: 'Introduction',
  action(params) {
    mount(Home, {
      content: <Introduction city_id = {params.city_id} location_name = {params.location_name} />
    });
  }
});


FlowRouter.route('/map/:quest_id', {
  name: 'map',
  action(params) {
    mount(Home, {
      content: <Map quest_id = {params.quest_id}/>
    });
  }
});


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

FlowRouter.route('/Dashboard', {
  name: 'Dashboard',
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
