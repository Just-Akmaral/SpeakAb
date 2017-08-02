import React, { Component } from 'react';
import { dbQuests, dbQuestsScenario } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';



class Conversation extends Component {

  getPhrases(){

//  let items = this.props.conversation.tasks[0].phrase;

  //console.log(items);
  let arr = ["Thank you"];
    return arr;
  }

  testSpeech(){

   var phrasePara = this.refs.phrase;
   var resultPara = this.refs.result;
   var diagnosticPara = this.refs.output;
   var testBtn = this.refs.run;

   var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || msSpeechRecognition;
   var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList || mozSpeechRecognitionList || msSpeechRecognitionList;
   var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent || mozSpeechRecognitionEvent || msSpeechRecognitionEvent;

   var phrases = this.getPhrases();

    console.log("123");

    testBtn.textContent = 'wait a minute';
    var phrase = phrases[this.randomPhrase(phrases)];

    phrasePara.textContent = phrase;
    resultPara.textContent = 'your result';
    diagnosticPara.textContent = '...diagnostic messages';

    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;

    recognition.start();

    recognition.onresult = function(event) {

      var speechResult = event.results[0][0].transcript;
      diagnosticPara.textContent = 'Speech received: ' + speechResult + '.';
      speechResult = speechResult.toUpperCase();
      phrase = phrase.toUpperCase();

      if(speechResult === phrase) {
        resultPara.textContent = 'I heard the correct phrase!';
        resultPara.style.background = 'lime';
      } else {
        resultPara.textContent = 'That didn\'t sound right.';
        resultPara.style.background = 'red';
      }

    }

    recognition.onspeechend = function() {
      recognition.stop();
      //testBtn.disabled = false;
      testBtn.textContent = 'Record';
    }

    recognition.onerror = function(event) {
      //testBtn.disabled = false;
      testBtn.textContent = 'Record';
      diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
    }

  }

  randomPhrase(arr) {
    var number = Math.floor(Math.random() * arr.length);
    return number;
  }

  run(event){
    event.preventDefault();
    this.testSpeech();
  }

  render(){
      return (
        <div className="container clearfix">
          <p ref="phrase">Phrase</p>
          <p ref="result">Result</p>
          <p ref="output">Diagnostic messages</p>
          <button ref="run" className="run" onClick={this.run.bind(this)}>Run</button>
        </div>
      )
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
