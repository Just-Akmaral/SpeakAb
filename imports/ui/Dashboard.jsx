import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';


class Quest extends Component {

  render(){
    return (
      <li key={this.props.quest._id}>
        <span>{this.props.quest.name}</span>
      </li>
    )
  }

}

class Dashboard extends Component {

  render(){
    return(
      <ul>
        {this.props.quests.map(function(quest){
          return <Quests quest={quest}/>
        })
        }
      </ul>
    )
  }

}

export default QuestsContainer = createContainer(() => {
  return { quests: dbQuests.find({}).fetch() };
}, Dashboard)
