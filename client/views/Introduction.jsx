import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';


class Introduction extends Component {

  render(){
    if(!this.props.location_item)
      return null;
    else
      return (
        <div>
        {this.props.location_item.name}
          <button>Start conversation</button>
          <button>Go to vocabulary</button>
        </div>
      )
  }

}

export default IntroductionContainer = createContainer( props => {
  return {
    location_item: dbQuests.findOne(
       {"_id": props.city_id}
    )
  };
}, Introduction)
