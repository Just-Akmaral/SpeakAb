import React, { Component } from 'react';

export default class Homepage extends Component {
  render() {
      return (
          <div className = "container clearfix">
          
          <section className="lp-content lp-content--intro">
            <div className="container clearfix">
              <p>
                SpeakAbility is an app created specifically for people with intermediate and upper-intermediate language levels to train their speaking skills
              </p>
            </div>
          </section>


          <section className="lp-content lp-content--benefit lp-content--situations">
            <div className="container clearfix">
              <h2>Real-life situations</h2>
              <p>
                We use quests to help you dive into real-life situations, so the process is fun and interactive
              </p>
              <div className="lp-content__cards">
                <div className="cards-col">
                  <div className="card card--cafe">Cafe</div>
                </div>
                <div className="cards-col">
                  <div className="card card--bank">Bank</div>
                  <div className="card card--museum">Museum</div>
                </div>
                <div className="cards-col">
                  <div className="card card--sightseeing">Sightseeing</div>
                  <div className="card card--airport">Airport</div>
                </div>
                <div className="cards-col">
                  <div className="card card--apartment">Apartment</div>
                  <div className="card card--concert">Concert</div>
                </div>
                <div className="cards-col">
                  <div className="card card--subway">Subway</div>
                </div>
              </div>
            </div>
          </section>

            <section className="lp-content lp-content--benefit lp-content--feedback">
              <div className="container clearfix">
                <h2>Feedback</h2>
                <p>
                  We are using speach recognition instruments to give you a feedback on your replies
                </p>
                <div className="lp-content__phone">
                  <span className="tip tip-1">listen to the audio</span>
                  <span className="tip tip-2">read the task</span>
                  <span className="tip tip-3">reply using keywords</span>
                  <span className="iphone"></span>
                </div>
              </div>
            </section>

            <section className="lp-content lp-content--features">
              <div className="container clearfix">
                <p className="feature feature--comfort">Practice your English speaking skills anytime, anywhere</p>
                <p className="feature feature--vr">Use VR extention to dive into the experience</p>
                <p className="feature feature--savings">No need to spend time or money to get to language clubs or courses</p>
              </div>
            </section>


            <section className="lp-content lp-content--cta">
              <h2>
                Stop worrying <br/>
                Start speaking
              </h2>
              <a href="/Dashboard" className="btn btn-primary btn-cta btn-cta--header">Try demo for free</a>
            </section>

            <footer className="footer">
              <div className="container clearfix">
                <nav className="footer__nav footer__nav--lp">
                  <ul>
                    <li><a href="mailto: hi@speakability.co">hi@speakability.co</a></li>
                  </ul>
                </nav>
              </div>
            </footer>
          </div>);
  }
}
