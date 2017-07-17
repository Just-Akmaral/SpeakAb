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

  // handleSubmit(event) {
	// 	event.preventDefault();
  //   	dbDonuts.insert({
  //   		name: this.refs.inputName.value,
  //   		price: this.refs.inputPrice.value
  //   	});
	// }

  render() {
    return (
    //  <div>
        // <form onSubmit={this.handleSubmit.bind(this)} >
        //   <input
        //     type="text"
        //     ref="inputName"
        //     placeholder="name"
        //   />
        //   <input
        //     type="text"
        //     ref="inputPrice"
        //     placeholder="price"
        //   />
        //   <input type="submit" value="Add"/>
        // </ form>
      <ul>
        {this.props.donuts_menu.map(function(menu_item){
          return <DonutMenuItem menu_item={menu_item} />
        })}
      </ul>
  //    </div>
  )
  }
}


export default DonutsMenuContainer = createContainer(() => {
  return {
    donuts_menu: dbDonutsMenu.find({}).fetch()
  }
}, DonutsMenu);
