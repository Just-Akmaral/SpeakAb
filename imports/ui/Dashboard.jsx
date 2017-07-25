import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

class Quest extends Component {

//  <img src = {this.props.quest.img} alt={this.props.quest.name}/>
  render(){
    return (
      <a className="quest quest--new" key={this.props.quest._id}  href = {"/map/" + this.props.quest._id}>
        <span className="quest__time">{this.props.quest.duration}</span>
        <h3 className="quest__title">{this.props.quest.name}</h3>
        <span className="quest__progress">
          <span className="quest__progress-bar"></span>
        </span>
      </a>
    )
  }

}

class Dashboard extends Component {

  render(){
    return(
      <section className = "quests quests--active">
        {this.props.quests.map(function(quest){
          return <Quest quest={quest}/>
        })
        }
      </section>
    )
  }

}

export default DashboardContainer = createContainer(() => {
  return { quests: dbQuests.find({}).fetch() };
}, Dashboard)
