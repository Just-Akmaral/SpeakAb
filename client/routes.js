import React, { Component } from 'react';
import {mount} from 'react-mounter';
import Home from './components/Home.jsx';
import App from '../imports/ui/App.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';

import Map from './views/Map.jsx';
import Introduction from './views/Introduction.jsx';
import Vocabulary from './views/Vocabulary.jsx';
import Conversation from './views/Conversation.jsx';
import Congratulation from './views/Congratulation.jsx';
import Homepage from './views/Homepage.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';

FlowRouter.route('/Congratulation/:location_id', {
  name: 'Congratulation',
  action(params) {
    Tracker.autorun(function() {
            if (!Meteor.userId()) {
                FlowRouter.go('home');
            } else {
                      mount(Home, {
                        content: <Congratulation location_id = {params.location_id}/>
                       });
            }
    });
  }
});

FlowRouter.route('/Conversation/:location_id', {
  name: 'Conversation',
  action(params) {
    Tracker.autorun(function() {
            if (!Meteor.userId()) {
                FlowRouter.go('home');
            } else {
                      mount(Home, {
                        content: <Conversation location_id = {params.location_id}/>
                       });
            }
    });  
  }
});

FlowRouter.route('/Vocabulary/:location_id', {
  name: 'Vocabulary',
  action(params) {
    Tracker.autorun(function() {
            if (!Meteor.userId()) {
                FlowRouter.go('home');
            } else {
                      mount(Home, {
                        content: <Vocabulary location_id = {params.location_id}/>
                       });
            }
    });    
  }
});

FlowRouter.route('/Introduction/:location_id', {
  name: 'Introduction',
  action(params) {
    Tracker.autorun(function() {
            if (!Meteor.userId()) {
                FlowRouter.go('home');
            } else {
                      mount(Home, {
                        content: <Introduction location_id = {params.location_id} />
                       });
            }
    });     
  }
});

FlowRouter.route('/map/:quest_id', {
  name: 'map',
  action(params) {
    Tracker.autorun(function() {
            if (!Meteor.userId()) {
                FlowRouter.go('home');
            } else {
                      mount(Home, {
                        content: <Map quest_id = {params.quest_id}/>
                       });
            }
    });    
  }
});

FlowRouter.route('/', {
  name: 'home',
  action: function() {
     Tracker.autorun(function() {
            if (!Meteor.userId()) {
                mount(Home, {
                   content:  <Homepage />
                 });
            } else {
                  mount(Home, {
                    content: <Dashboard />
                  });
            }
    });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
     Tracker.autorun(function() {
            if (!Meteor.userId()) {
                mount(Login, {
                   content:  <Login />
                 });
            } else {
                  mount(Home, {
                    content: <Dashboard />
                  });
            }
    });    
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action: function() {
     Tracker.autorun(function() {
            if (!Meteor.userId()) {
                mount(Register, {
                   content:  <Register />
                 });
            } else {
                  mount(Home, {
                    content: <Dashboard />
                  });
            }
    });       
  }
});

FlowRouter.route('/Dashboard', {
  name: 'Dashboard',
  action: function() {
     Tracker.autorun(function() {
            if (!Meteor.userId()) {
                FlowRouter.go('home');
            } else {
                  mount(Home, {
                    content: <Dashboard />
                  });
            }
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
