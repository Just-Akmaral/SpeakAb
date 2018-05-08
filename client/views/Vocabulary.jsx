import React, { Component } from "react";
import { dbQuests } from "/imports/api/quests.js";
import { createContainer } from "meteor/react-meteor-data";

class Word extends Component {
  setAudio(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.filter(function(voice) {
      return voice.name == "Google US English";
    })[0];
    window.speechSynthesis.speak(utterance);
  }
  runAudio(event) {
    event.preventDefault();
    let Btn = this.refs.runAudio;
    let text = Btn.getAttribute("data-word");
    console.log(text);
    this.setAudio(text);
  }
  render() {
    return (
      <div className="vocabulary__card clearfix">
        <button
          ref="runAudio"
          name="button"
          className="btn-sound"
          onClick={this.runAudio.bind(this)}
          data-word={this.props.word.english}
        />
        <span className="text text-important">{this.props.word.english}</span>
        <span className="text text-secondary">{this.props.word.russian}</span>
      </div>
    );
  }
}

class Vocabulary extends Component {
  render() {
    if (!this.props.ret) {
      return null;
    } else {
      return (
        <div className="container clearfix">
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="/Dashboard/" className="breadcrumbs__link">
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href={"/Introduction/" + this.props.location_id}
                  className="breadcrumbs__link"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a className="breadcrumbs__link breadcrumbs__link--current">
                  Vocabulary
                </a>
              </li>
            </ul>
          </div>

          <section className="vocabulary">
            <h1 className="h2">Remember these words</h1>
            {this.props.ret[0].vocabulary.map(word => (
              <Word key={word.english} word={word} />
            ))}
          </section>
        </div>
      );
    }
  }
}

export default createContainer(props => {
  let loc_it = dbQuests.findOne(
    { "locations.id": props.location_id },
    { fields: { locations: true } }
  );

  let ret = null;
  if (loc_it) {
    ret = loc_it["locations"].filter(obj => {
      return obj.id === props.location_id;
    });
  }

  return {
    ret
  };
}, Vocabulary);
