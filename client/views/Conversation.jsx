import React, { Component } from 'react';
import { dbQuests, dbQuestsScenario } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';
import ReactPlayer from 'react-player';


class Video extends Component{
  render() {//  
    if (!this.props.video_url) {return null;}
    else {    
      return (
        <div className="conversation__vid">
          <ReactPlayer url = {this.props.video_url.video} style ="position:relative;height:0;padding-bottom:56.25%"/>
        </div>
      )
    }
  }
}

class Word extends Component {
  render(){
    if (!this.props.word) {return null;} 
    else {
      return (
        <li><a href="#">{this.props.word}</a></li>
      );
    }  
  }
};


class Words extends Component{   
  render(){
    if (!this.props.words) {return null;} 
    else {
      return (
        <div>
          <ul className="clearfix">
              {this.props.words.map(word => (
                <Word word={word}/>
              ))}
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
          <div className="conversation__task">
            <h3 className="h3">Your task:</h3>
            <p className="text text-important">{this.getHint(this.props.curNumPhrase)}</p>
          </div>
          <div className="conversation__words">
            <h3 className="h3">Use these words:</h3>
            <Words words = {this.getWords(this.props.curNumPhrase)} />
          </div>
        </div>
      );
    }  
  }
}

class Audio extends Component{
  runShowText(event){
    event.preventDefault();    
    let text = this.getBotPhrases(this.props.curNumPhrase);
    this.showText(text);
  }
  showText(text) {
    var bot_speechPara = this.refs.bot_speech;
    bot_speechPara.textContent = text;
    if (bot_speechPara.style.display === 'none') {
        bot_speechPara.style.display = 'block';
    } else {
        bot_speechPara.style.display = 'none';
    }
  }
  getBotPhrases(item){
    let i = 0;
    let arr_tasks = this.props.scen.tasks;
    let arr_phrases = [];
    while (i <= arr_tasks.length-1) {
        arr_phrases.push(arr_tasks[i].bot_phrase);
        i++;
    }
    return arr_phrases[item];
  }
  setAudio(text){
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.filter(function(voice) {return voice.name == 'Google US English'; })[0];
    window.speechSynthesis.speak(utterance);
  }
  runAudio(event){
    event.preventDefault(); 
    let text = this.getBotPhrases(this.props.curNumPhrase);
    this.setAudio(text);
  }
  render() {
    return(
      <div className = "conversation__player">
        <button ref="runAudio" className="runAudio" onClick={this.runAudio.bind(this)} className="player__play"></button> 
        <button ref="runShowText" className="runShowText" onClick={this.runShowText.bind(this)} className="player__showtext"></button> 
        <span className="player__sound"></span>
        <span ref = "bot_speech" className="player__text"></span>
      </div>
    );
  }
}

class User extends Component{
    constructor(props) {
      super(props);
      this.state = {
        curNumPhrase: 0, 
        curNumTry: 0,
        isSpeech: false,
        isEnd: false
    };
    }
    compareSentences(one, two){
      var stringSimilarity = require('string-similarity');
      var res = stringSimilarity.compareTwoStrings(one, two);
      return res;
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
      let number;
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

      var resultPara = this.refs.result;
      var user_speechPara = this.refs.user_speech;
      var testBtn = this.refs.run;

      user_speechPara.textContent = '';
      testBtn.disabled = true;
      testBtn.textContent = 'wait a minute';
      resultPara.textContent = 'your result';

      var phrases = this.getPhrases();
      var phrase;
      phrase = phrases[this.nextPhrase(phrases)];

     /* if (this.state.curNumPhrase ===0){var isWrong = false;}       
      if (isWrong){alert("Prev was wrong");}*/
      //код выше тоже оставить
      
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
        
        user_speechPara.textContent = speechResult; 

        speechResult = speechResult.toUpperCase();
        phrase = phrase.toUpperCase();
        
        if (speechResult === phrase) {
            resultPara.textContent = "Success! Move on to the next task";
            resultPara.style.color = 'lime';
        } else {
            resultPara.textContent = "You didn't get that right, try again";
            resultPara.style.color = 'red';
          // isWrong = true;
          //оставить тут параметр
        }
      }
    
    // впихнуть сюда state а брать значение из iswrong

      recognition.onspeechend = function() {
        recognition.stop();
        testBtn.disabled = false;
        testBtn.textContent = 'Continue';
      }

      recognition.onerror = function(event) {
        testBtn.disabled = false;
        alert('Error occurred in recognition: ' + event.error);
        testBtn.textContent = 'Rewrite';
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
        <section className="conversation clearfix">
          <section className="conversation__bot">
            <Video video_url = {this.props.scenario}/>
            <Audio scen = {this.props.scenario} curNumPhrase = {this.state.curNumPhrase}/>
          </section>  
          <section className="conversation__hints">
            <Hints scen = {this.props.scenario} curNumPhrase = {this.state.curNumPhrase} isSpeech = {this.state.isSpeech}/>
          </section>
          <section className="reply">
            <button ref = "run" onClick = {this.run.bind(this)} className="btn btn-primary btn-mic">Play</button>
            <div className="reply__record">
              <span className="text">record your reply</span>
              <p ref = "user_speech" className="text">Your reply</p>
              <p ref = "result"></p>
            </div>          
           </section>
        </section>
      );
    }
}

class Conversation extends Component {
  render(){  
    if ( (!this.props.ret) || (!this.props.map_obj) ){return null;}
      else {    
        return (
            <main className="container clearfix">                
              <div className="breadcrumbs">
                <ul>
                  <li><a href = "/Dashboard/" className="breadcrumbs__link">Dashboard</a></li>
                  <li><a href = {"/Map/" + this.props.map_obj._id} className = "breadcrumbs__link">{this.props.map_obj.name} </a></li>
                  <li><a href = "#" className = "breadcrumbs__link breadcrumbs__link--current">{this.props.ret[0].name}</a></li>
                </ul>
              </div>
              <User scenario = {this.props.conv}/>
            </main>

        );
      }  
  }
}

export default createContainer(props => {
  let conv = dbQuestsScenario.findOne(
    {"name": props.location_id}
  );

  let map_obj = 
    dbQuests.findOne(
      {"locations.id": props.location_id},
      {fields: {"_id": true, "name":true }}
  );


 let loc_it = dbQuests.findOne(
        {"locations.id": props.location_id},
        {fields: {"locations": true}}
    );
    let ret = null;
    if(loc_it) {
        ret = loc_it['locations'].filter(obj => {return obj.id === props.location_id});
    }


  return {
    conv, map_obj, ret
  };

}, Conversation)