import React, { Component } from 'react';

import DonutsCartContainer from './DonutsCart.jsx';
import DonutsMenuContainer from './DonutsMenu.jsx';


export default class App extends Component {

  render() {
    return (
      <div>
        <header>Quests</header>
        <DonutsMenuContainer />
        <header>Completed</header>
        <DonutsCartContainer />
      </div>
    )
  }

}
