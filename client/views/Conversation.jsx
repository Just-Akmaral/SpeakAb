import React, { Component } from 'react';
import { dbQuests, dbQuestsScenario } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';
import ReactPlayer from 'react-player';


class Video extends Component{
  render() {//<ReactPlayer url='https://www.youtube.com/watch?v=y-xpjDLdr4w'/>
    return(
      <div>Video here</div>
    )
  }
}

class Audio extends Component{
  render() {
    return(
      <div>Audio here</div>
    )
  }
}

class Hints extends Component{
  render(){
    return(
      <ul>
        <li>excuse me</li>
        <li>terminal</li>
      </ul>
    )
  }
}

class User extends Component{

    constructor(props) {
      super(props);
      this.state = {curNumPhrase: 0, isEnd: false};

    }
    compareSentences(){
      var stringSimilarity = require('string-similarity');
      var res = stringSimilarity.compareTwoStrings(speechResult, phrase);
    }

    getPhrases(){
      //  let items = this.props.conversation.tasks[0].phrase;
      //console.log(items);
      let arr = ["Thank you", "Hello", "No"];
      return arr;
    }

    nextPhrase(arr) {
      var number;
      if (this.state.curNumPhrase <= arr.length){
        number = this.state.curNumPhrase;
        this.setState({curNumPhrase: 1 + this.state.curNumPhrase});
      } else {
        this.setState({isEnd: true});
      }
      console.log(number);
      return number;
    }

    testSpeech(){
      var phrasePara = this.refs.phrase;
      var resultPara = this.refs.result;
      var testBtn = this.refs.run;

      testBtn.textContent = 'wait a sec';
      resultPara.textContent = 'your result';


      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || msSpeechRecognition;
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList || mozSpeechRecognitionList || msSpeechRecognitionList;
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent || mozSpeechRecognitionEvent || msSpeechRecognitionEvent;
      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;

      var phrases = this.getPhrases();
      var phrase = phrases[this.nextPhrase(phrases)];
      phrasePara.textContent = phrase;

      var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;

      recognition.start();

      recognition.onresult = function(event) {
        var speechResult = event.results[0][0].transcript;
        speechResult = speechResult.toUpperCase();
        phrase = phrase.toUpperCase();

        if(speechResult === phrase) {
            resultPara.textContent = "Great";
            testBtn.style.background = 'lime';
        } else {
            resultPara.textContent = "You said: " + speechResult;
            testBtn.style.background = 'red';
        }
      }

      recognition.onspeechend = function() {
        recognition.stop();
        //testBtn.disabled = false;
        testBtn.textContent = 'Next';
      }

      recognition.onerror = function(event) {
        //  testBtn.disabled = false;
        alert('Error occurred in recognition: ' + event.error);
      }

    }

    run(event){
      event.preventDefault();
      if (this.state.isEnd !== true){
        this.testSpeech();
      } else {
        alert("The End");
      }
      this.testSpeech();
    }

  render() {
    return(
      <div>
        <p ref="phrase">Phrase</p>
        <p ref="result"> </p>
        <button ref="run" className="run" onClick={this.run.bind(this)}>Nice record button</button>
      </div>
    )
  }
}

class Conversation extends Component {
  render(){
    if (Meteor.user()) {
      return (
        <div className="container clearfix">
          <Video />
          <Audio />
          <p>Ask about smth</p>
          <p>Use these words</p>
          <Hints />
          <User />
        </div>
      )
    }
    else {
      FlowRouter.go('login');
    }
  }
}

export default createContainer(props => {

  let conversation = dbQuestsScenario.findOne(
    {"name": props.location_id}
  );

  return {
    conversation
  };
}, Conversation)
