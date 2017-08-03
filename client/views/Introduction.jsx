import React, { Component } from 'react';
import { dbQuests } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';


class Introduction extends Component {

  checkText(){
    // var jaccard = require ('jaccard-similarity-sentences');
    // var sentence1 = 'This is one sentence.';
    // var sentence2 = 'This is another sentence.';
    //
    // var measure = jaccard.jaccardSimilarity(sentence1, sentence2);
    //
    // console.log(measure);

    /*let ss = require('sentence-similarity')

    let similarity = ss.sentenceSimilarity;
    let similarityScore = ss.similarityScore;

    let s1 = ['how','close','is','this','to','that']
    let s2 = ['these','two','are','not','that','close']

    let winkOpts = { f: similarityScore.winklerMetaphone, options : {threshold: 0} }

    console.log(similarity(s1,s2,winkOpts))*/

  }

  render(){
    if (Meteor.user()) {
      if (!this.props.ret) {return null;}
        else {
          return (
            <div className="container clearfix">
              <a href="#" className = "link-back">back to the map</a>
                  <section className = "location clearfix">
                    <p className = "location__description">{this.props.ret[0].description}</p>
                    <div className = "">
                      <a href = {"/Conversation/" + this.props.location_id} className = "btn btn-primary" action={this.checkText()}>Start conversation</a>
                      <a href = {"/Vocabulary/" + this.props.location_id} className = "btn btn-secondary">Show vocabulary</a>
                    </div>
                  </section>
            </div>
          )
        }
   } else {
          FlowRouter.go('login');
    }
  }
}

export default createContainer( props => {
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

}, Introduction)
