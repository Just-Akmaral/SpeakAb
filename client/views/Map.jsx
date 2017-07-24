import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

class Locations extends Component {
  // {this.props.quest_item.name}
  render(){
    return (
      <div>
        <li key={this.props.location._id}>
          <a href = "#">
            {this.props.location.name}
          </a>
        </li>
      </div>
    )
  }

}


class Map extends Component {

  render(){
    if(!this.props.city)
      return null;
    else
      return (
        <ul>
          {this.props.city.locations.map((loc) =>
            <Locations location = {loc} />
          )}
        </ul>
      )
  }

}

export default MapContainer = createContainer( props => {
  return {
    city: dbQuests.findOne(
       {"_id": props.quest_id}
    )
  };
}, Map)
