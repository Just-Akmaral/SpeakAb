import React, { Component } from 'react';
import DashboardContainer from './Dashboard.jsx';


export default class App extends Component {

  render() {
    return (
      <main className = "container clearfix">
        <DashboardContainer/>
      </main>
    )
  }

}
