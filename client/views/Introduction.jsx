import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';


class Introduction extends Component {

  render(){
    if(!this.props.ret)
      return null;
    else{
      return (
        <div>
          <a href="#" className = "link-back">back to the map</a>

              <section className = "location clearfix">
                <p className = "location__description">{this.props.ret[0].description}</p>
                <div className = "">
                  <a href = "#" className = "btn btn-primary">Start conversation</a>
                  <a href = "#" className = "btn btn-secondary">Show vocabulary</a>
                </div>
              </section>
        </div>
      )
    }
  }

}

export default createContainer( props => {
  var loc_it = dbQuests.findOne(
    {"locations.id": props.location_id},
    {fields: {"locations": true}}
  );

  var ret = null;
  if(loc_it) {
    ret = loc_it['locations'].filter(obj => {return obj.id === props.location_id});
  }

  return {
    ret
  };

}, Introduction)
