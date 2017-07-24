import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

class Quest extends Component {

  render(){
    return (
      <div>
        <li key={this.props.quest._id}>
          <a href = {"/map/" + this.props.quest._id}>
            {this.props.quest.name} : {this.props.quest.duration} min
          </a>
          <img src = {this.props.quest.img} alt={this.props.quest.name}/>
        </li>
      </div>
    )
  }

}

class Dashboard extends Component {

  render(){
    return(
      <ul>
        {this.props.quests.map(function(quest){
          return <Quest quest={quest}/>
        })
        }
      </ul>
    )
  }

}

export default DashboardContainer = createContainer(() => {
  return { quests: dbQuests.find({}).fetch() };
}, Dashboard)
