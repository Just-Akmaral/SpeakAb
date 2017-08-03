import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

class Word extends Component {

  render(){
    return (
      <div className = "vocabulary__card clearfix">
        <button type = "button" name = "button" className = "btn-sound"></button>
        <span className = "word">{this.props.word.english}</span>
        <span className = "translation">{this.props.word.russian}</span>
      </div>
    )
  }
}



class Vocabulary extends Component {
  render(){
    if (Meteor.user()) {
      if (!this.props.ret)
        {return null;}
      else {
        return (
          <div className="container clearfix">
            <a href="#" className = "link-back">back to the map</a>
            <section className="vocabulary">
              <h1>Remember these words</h1>
              {this.props.ret[0].vocabulary.map((word) =>
                <Word word = {word} />
              )}
            </section>
          </div>
          )
        }
      }
      else {
          FlowRouter.go('login');
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
