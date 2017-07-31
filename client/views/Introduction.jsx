import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';

//var jaccard = require ('jaccard-similarity-sentences');

class Introduction extends Component {

  checkText(){
    /*var sentence1 = 'This is one sentence.';
    var sentence2 = 'This is another sentence.';

    var measure = jaccard.jaccardSimilarity(sentence1, sentence2);

    console.log(measure);*/
  }

  render(){
    if(!this.props.ret)
      return null;
    else{
      return (
        <div className="container clearfix">
          <a href="#" className = "link-back">back to the map</a>
              <section className = "location clearfix">
                <p className = "location__description">{this.props.ret[0].description}</p>
                <div className = "">
                  <a href = "#" className = "btn btn-primary" action={this.checkText()}>Start conversation</a>
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
