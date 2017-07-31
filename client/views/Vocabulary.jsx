import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

class Word extends Component {

  render(){
    return (
      <div className="container clearfix">
        <li>
          {this.props.word.english} - {this.props.word.russian}
        </li>
      </div>
    )
  }
}



class Vocabulary extends Component {

  render(){
    if(!this.props.ret)
      return null;
    else{
      return (
        <div className="container clearfix">
          <a href="#" className = "link-back">back to the map</a>
          <ul>
            {this.props.ret[0].vocabulary.map((word) =>
              <Word word = {word} />
            )}
          </ul>
        </div>
        )
      }
    }

  }

export default createContainer(props => {
  let loc_it = dbQuests.findOne(
    {"locations.id": props.location_id},
    {fields: {"locations": true}}
  );

  let ret = null;
  if(loc_it) {
    ret = loc_it['locations'].filter(obj => {return obj.id === props.location_id});
  }

  return {
    ret
  };
}, Vocabulary)
