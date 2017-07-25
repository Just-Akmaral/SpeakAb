import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

class Locations extends Component {
  render(){
      return (
        <div>
          <li>
            <a href = {"/Introduction/" + this.props.location_item.id}>
              {this.props.location_item.name}
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
            <Locations city_id = {this.props.city._id} location_item = {loc} />
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
