import React, { Component } from 'react';
import { dbDonuts, dbDonutsMenu } from '/imports/api/donuts.js';
import { createContainer } from 'meteor/react-meteor-data';

class DonutMenuItem extends Component {

  addItem(event){
    event.preventDefault();
    dbDonuts.insert(
      {name: this.props.menu_item.name}
    )
  }

  render() {
    return (
      <li key={this.props.menu_item._id}>
        <span>{this.props.menu_item.name}: ${this.props.menu_item.price}</span>

        <a className="add_donut" href="#" onClick={this.addItem.bind(this)}>Add</a>
      </li>
    )
  }

}

class DonutsMenu extends Component {

  render() {
    return (
      <ul>
        {this.props.donuts_menu.map(function(menu_item){
          return <DonutMenuItem menu_item={menu_item} />
        })}
      </ul>
  )
  }
}


export default DonutsMenuContainer = createContainer(() => {
  return {
    donuts_menu: dbDonutsMenu.find({}).fetch()
  }
}, DonutsMenu);
