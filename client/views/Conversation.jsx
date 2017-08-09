import React, { Component } from 'react';
import { dbQuests, dbQuestsScenario } from '/imports/api/quests.js';
import { createContainer } from 'meteor/react-meteor-data';
import ReactPlayer from 'react-player';


class Video extends Component{
  render() {
    if (!this.props.video_url) {return null;}
    else {    
      return (
        <div className="conversation__vid">
          <div style = {{
                position: 'relative',
                height: '0',
                paddingBottom: '56.25%'
          }}>
          </div>
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
                <Word key={word} word={word}/>
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
  getWords(item, count){
    let i = 0;
    let arr_tasks = this.props.scen.tasks;
    let arr_allwords = arr_tasks[item].words;
    let arr_allwords_length = arr_allwords.length; 
    let howMuch = ((arr_allwords_length*(count + 1))/3 )- 1;
    let arr_words = [];

    while (i <= howMuch) {
        arr_words.push(arr_allwords[i]);
        i++;
    }
    return arr_words;
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
            <Words words = {this.getWords(this.props.curNumPhrase, this.props.numAttempt)} />
          </div>
        </div>
      );
    }  
  }
}

class Audio extends Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  runShowText(event){
    event.preventDefault();    
    let text = this.getBotPhrases(this.props.curNumPhrase);
    let bot_speechPara = this.refs.bot_speech;
    bot_speechPara.textContent = text;    
    if (!this.state.clicked) {
        this.setState({clicked: true});
    } else {
        this.setState({clicked: false});
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
      <div className = "player">
        <button ref="runAudio" className="runAudio" onClick={this.runAudio.bind(this)} className="player__play"></button> 
        <button ref="runShowText" className="runShowText" style = {{display:'block'}}onClick={this.runShowText.bind(this)} className="player__showtext"></button> 
        <span className={this.state.clicked ? 'player__sound hidden' : 'player__sound'}></span>
        <span ref = "bot_speech" className={this.state.clicked ? 'player__text' : 'player__text hidden'}></span>
      </div>
    );
  }
}

class User extends Component{
    constructor(props) {
      super(props);
      this.state = {
        curNumPhrase: 0, 
        curNumAttempt: 0,
        isWrong: false,
        isTrue: false,
        isEnd: false,
        showHelp: false,
        classResult: 'alert hidden',
        clickHideHint: false,
        truePhrase: '',
        alert: ''
      };
    }
    getPhrases(index){//масисив с прав фразами
      let i = 0;
      let arr_tasks = this.props.scenario.tasks;//массив с массивами фраз
      let arr_phrases = [];
      while (i <= arr_tasks.length-1) {
        arr_phrases.push(arr_tasks[i].user_phrase);
        i++;
      }
      return arr_phrases[index];//массив[index] с фразами
    }
    includePhrase(user, bot_arr){
      let result;
      result = bot_arr.includes(user);  
      return result;
    }
    makeWrong(){
      this.setState({isWrong: true});
    }
    makeTrue(){
      this.setState({isTrue: true});
    }
    giveHelp(){
      this.setState({showHelp: true});
    }
    removeHelp(){
      this.setState({showHelp: false});
    }
    isHelp(){
      return this.state.showHelp;
    }
    countAttempt(index){
      this.setState({curNumAttempt: this.state.curNumAttempt + index});
    }
    countNumPhrase(index){
      this.setState({curNumPhrase: this.state.curNumPhrase + index});
    }
    setTruePhrase(value){
      this.setState({TruePhrase: value});
    }
    showTruePhrase(){
      return this.state.truePhrase;
    }
    changeResult(value){
      this.setState({classResult: value});
    }
    changeAlert(value){
      this.setState({alert: value});
    }
    testSpeech(){

      var resultPara = this.refs.result;
      var user_speechPara = this.refs.user_speech;
      var testBtn = this.refs.run;

      user_speechPara.textContent = '';
      testBtn.disabled = true;
      testBtn.textContent = 'wait a minute';
      resultPara.textContent = '';

      var phrases = this.getPhrases(this.state.curNumPhrase); // текущий массив фраз
      var Component = this;
      Component.setState({ curNumTry: this.state.curNumTry + 1});
      
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition || mozSpeechRecognition || msSpeechRecognition;
      var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList || mozSpeechRecognitionList || msSpeechRecognitionList;
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent || mozSpeechRecognitionEvent || msSpeechRecognitionEvent;
      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 5;
      var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + phrases.join(' | ') + ' ;'
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;

      this.setTruePhrase(phrases[0]);    
      recognition.start();

      recognition.onresult = (event) => {
        var speechResult = event.results[0][0].transcript;
        user_speechPara.textContent = speechResult;
        speechResult = speechResult.toLowerCase();
        phrases = phrases.join('|').toLowerCase().split('|');

        if ( this.includePhrase(speechResult, phrases) ) {
              this.changeResult('alert alert--success');
              this.changeAlert('Succes! Move on to the next task');
              this.makeTrue();
              this.countNumPhrase(1);
        } else {
              this.changeResult('alert alert--danger');
              this.changeAlert('You didn’t get that right, try again');
              this.makeWrong(); 
              this.countAttempt(1);
        }
       /* if(this.isHelp()){
          this.countNumPhrase(1);
        }*/
      }
    

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
    returnCurNumPhrase(){
      return this.state.curNumPhrase;
    }
    returnTasksLength(){
      return this.props.scenario.tasks.length-1; 
    }
    run(event){
      event.preventDefault();
      this.changeResult('alert hidden');
      if (this.returnCurNumPhrase() >= this.returnTasksLength()) {
        this.setState({isEnd: true});
        alert("The end! Click Record Voice");
      } 
      console.log(this.state.curNumAttempt);
      if (this.state.isEnd !== true){ // если это не последнее задание
        if (this.state.isWrong){ // проверяем если этот ответ не правильный
          if (this.state.curNumAttempt === 2){ // если попытки уже было 3
            this.countAttempt(-2); // сбрасываем счетчик попыток
            this.giveHelp();//показываем подсказку
            //без разницы что сказал, надо перекинуть дальше
          } else {
            this.removeHelp();
          }
        }
        this.testSpeech();
      } else {//может проверить на последнюю фразу?
        let par = { location_id: this.props.scenario.name};
        FlowRouter.go('Congratulation', par);
      }
    }

    showResult(){
      return this.state.alert;
    }
    setClassResult(){
      return this.state.classResult;      
    }
    setClassResultHelp(){
      return;
    }
    render() {
      return(
        <section className="conversation clearfix">
          <section className="conversation__bot">
            <Video video_url = {this.props.scenario}/>
            <Audio scen = {this.props.scenario} curNumPhrase = {this.state.curNumPhrase}/>
          </section>  
          <section className="conversation__hints">
            <Hints numAttempt= {this.state.curNumAttempt} scen = {this.props.scenario} curNumPhrase = {this.state.curNumPhrase} isSpeech = {this.state.isSpeech}/>
          </section>
          <section className="reply">
            <button ref = "run" onClick = {this.run.bind(this)} className="btn btn-primary btn-mic">Play</button>
            <div className="reply__record">
              <span className="text">record your reply</span>
              <p ref = "user_speech" className="text"></p>
              <p ref = "result"></p>
            </div>   
            <div className={this.setClassResult()}>
              {this.showResult()}
            </div>              
           </section>
            <section className={this.isHelp() ? 'help' : 'help hidden'}>
              <div className="help__popup">
                <h3 className="h3">Try to say:</h3>
                <p className="text-important">{this.state.TruePhrase}</p>
                <button type="button" name="button" onClick = {this.removeHelp.bind(this)} className = 'btn-close'>close</button>
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