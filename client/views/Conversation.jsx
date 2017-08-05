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

/*class Word extends Component {
  render(){
    if (!this.props.word) {return null;} 
    else {
      return (
        <li>{this.props.word}</li>
      );
    }  
  }
};
*/

class Words extends Component{   
  render(){
    if (!this.props.words) {return null;} 
    else{
      return(
        <div>
          <ul>
            {this.props.words[0]}
          </ul>
        </div>
      );
    }
  }
}

class Hints extends Component{
  getHint(item){
    let i = 0;
    let arr_tasks = this.props.scen.tasks;
    let arr_hints = [];
    while (i <= arr_tasks.length-1) {
        arr_hints.push(arr_tasks[i].hint);
        i++;
    }
    return arr_hints[item];
  }
  getWords(item){
    let i = 0;
    let arr_tasks = this.props.scen.tasks;
    let arr_words = [];
    while (i <= arr_tasks.length-1) {
        arr_words.push(arr_tasks[i].words);
        i++;
    }
    return arr_words[item];
  }
  render(){
    if (!this.props.scen) {return null;}  
    else {  
      return(
        <div>
          <p>{this.getHint(this.props.curNumPhrase)}</p>
          <p>Use these words</p>
          <Words words = {this.getWords(this.props.curNumPhrase)} />
        </div>
      );
    }  
  }
}

class Audio extends Component{
  getBotPhrases(){
    let i = 0;
    let arr_tasks = this.props.scen.tasks;
    let arr_phrases = [];
    while (i <= arr_tasks.length-1) {
        arr_phrases.push(arr_tasks[i].bot_phrase);
        i++;
    }
    return arr_phrases;
  }
  setAudio(){
    var bot_phrases = this.getBotPhrases();
    var text = bot_phrases[this.props.curNumPhrase];
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.filter(function(voice) {return voice.name == 'Google US English'; })[0];
    window.speechSynthesis.speak(utterance);
  }
  runAudio(event){
    event.preventDefault();
    this.setAudio();
  }
  render() {
    return(
      <div>
        <button ref="runAudio" className="runAudio" onClick={this.runAudio.bind(this)}>Play Auido</button> 
      </div>
    );
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
      let i = 0;
      let arr_tasks = this.props.scenario.tasks;
      let arr_phrases = [];
      while (i <= arr_tasks.length-1) {
        arr_phrases.push(arr_tasks[i].user_phrase);
        i++;
      }
      return arr_phrases;
    }
    nextPhrase(arr) {
      var number;
      if (this.state.curNumPhrase < (arr.length-1)){
        number = this.state.curNumPhrase;
        this.setState({curNumPhrase: 1 + this.state.curNumPhrase});
      } else {
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
        testBtn.textContent = 'Record';
      }
    }
    run(event){
      event.preventDefault();
      if (this.state.isEnd !== true){
        this.testSpeech();
      } else {
        let par = { location_id: this.props.scenario.name};
        FlowRouter.go('Congratulation', par);
      }
    }

  render() {
    return(
      <div>
        <Audio scen = {this.props.scenario} curNumPhrase = {this.state.curNumPhrase}/>
        <Hints scen = {this.props.scenario} curNumPhrase = {this.state.curNumPhrase}/>
        <p ref="phrase"></p>
        <p ref="result"></p>
        <button ref="run" className="run" onClick={this.run.bind(this)}>Nice record button</button>
      </div>
    );
  }
}

class Conversation extends Component {
  render(){
      return (
        <div className="container clearfix">
          <Video />
          <User scenario = {this.props.conv}/>
        </div>
      );
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