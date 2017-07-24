import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

class Locations extends Component {

  render(){
    return (
      <div>
        {this.props.quest_item}
      </div>
    )
  }

}


class Map extends Component {

  findQuest(item){

  //  return dbQuests.find(ObjectId(item));
  return item;
  }

  render(){
    return(
      <Locations quest_item = {this.findQuest(this.props.quest_id)} />
    )
  }

}

export default MapContainer = createContainer(() => {
//  return { loc: dbQuests.find({_id: "ji2i7sxpz24nxZiWq"})};
  return { quests: dbQuests.find({}).fetch() };
}, Map)
