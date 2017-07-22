import React, { Component } from 'react';
import DashboardContainer from './Dashboard.jsx';


export default class App extends Component {

  render() {
    return (
      <div>
        <header>Quests</header>
        <DashboardContainer/>
      </div>
    )
  }

}
