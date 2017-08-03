import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';


class Congratulation extends Component {

  render(){
    if(!this.props.conversation)
      return null;
    else{
      return (
        <div className="container clearfix">
          {this.props.conversation.congratulation}
        </div>
        )
      }
    }

  }

export default createContainer(props => {
  let conversation = dbQuestsScenario.findOne(
    {"name": props.location_id}
  );

  return {
    conversation
  };
}, Congratulation)
