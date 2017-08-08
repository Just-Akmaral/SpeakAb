import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Quest extends Component {
  render(){
    return (
      <a className = "quest quest--new" href = {"/map/" + this.props.quest._id}>
        <span className = "quest__time">{this.props.quest.duration} min</span>
        <h3 className = "quest__title">{this.props.quest.name}</h3>
        <span className = "quest__progress">
          <span className = "quest__progress-bar"></span>
        </span>
      </a>
    );
  }
};

class Dashboard extends Component {
  render(){
      return(
        <main className = "container clearfix">
          <section className = "quests quests--active">
            {this.props.quests.map(function(quest){
              return <Quest key = {quest._id} quest = {quest}/>
            })}
          </section>
        </main>  
      );
  }
};

export default DashboardContainer = createContainer(() => {
  return { 
    quests: dbQuests.find({}).fetch()
  };
}, Dashboard);