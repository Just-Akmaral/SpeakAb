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
      console.log(this.state.curNumPhrase + " " + (arr.length-1));
      if (this.state.curNumPhrase < (arr.length-1)){
        number = this.state.curNumPhrase;
        this.setState({curNumPhrase: 1 + this.state.curNumPhrase});
      } else {
        console.log("последняя фраза");
        number = this.state.curNumPhrase;
        this.setState({isEnd: true});
      }
      return number;
    }
    testSpeech(){

      var phrasePara = this.refs.phrase;
      var resultPara = this.refs.result;
      var testBtn = this.refs.run;

      phrasePara.textContent = '';
      testBtn.disabled = true;
      testBtn.textContent = 'wait a minute';

      var phrases = this.getPhrases();
      var phrase = phrases[this.nextPhrase(phrases)];
      phrasePara.textContent = phrase;
      resultPara.textContent = 'your result';
      resultPara.style.background = 'rgba(0,0,0,0.2)';


      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || msSpeechRecognition;
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList || mozSpeechRecognitionList || msSpeechRecognitionList;
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent || mozSpeechRecognitionEvent || msSpeechRecognitionEvent;
      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;


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
            resultPara.style.background = 'lime';
        } else {
            resultPara.textContent = "You said: " + speechResult;
            resultPara.style.background = 'red';
        }
      }

      recognition.onspeechend = function() {
        recognition.stop();
        testBtn.disabled = false;
        testBtn.textContent = 'Start new test';
      }

      recognition.onerror = function(event) {
        testBtn.disabled = false;
        alert('Error occurred in recognition: ' + event.error);
        testBtn.textContent = 'Start new test';
      }

    }

    run(event){
      event.preventDefault();
      console.log(this.state.isEnd);
      if (this.state.isEnd !== true){
        this.testSpeech();
      } else {
        console.log("end");
        let par = { location_id: this.props.loc};

        FlowRouter.go('Congratulation', par);
      }
    }

  render() {
    return(
      <div>
        <p ref="phrase"></p>
        <p ref="result"></p>
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
          <User loc = {this.props.conv.name}/>
        </div>
      )
    }
    else {
      FlowRouter.go('login');
    }
  }
}

export default createContainer(props => {

  let conv = dbQuestsScenario.findOne(
    {"name": props.location_id}
  );

  return {
    conv
  };
}, Conversation)
