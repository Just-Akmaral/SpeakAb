import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

class Locations extends Component {
  render(){
      return (
        <div className="container clearfix">
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
  //  if (Meteor.user()) {
      if (!this.props.city) {return null;}
        else {
          return (
            <ul>
              {this.props.city.locations.map((loc) =>
                <Locations key = {loc.id} location_item = {loc} />
              )}
            </ul>
          )
        }
   /*   }
      else {
          FlowRouter.go('login');
      }*/
  }
}

export default MapContainer = createContainer( props => {
  return {
    city: dbQuests.findOne(
       {"_id": props.quest_id}
    )
  };
}, Map)
