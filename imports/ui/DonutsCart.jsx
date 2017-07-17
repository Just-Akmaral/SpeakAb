import React, { Component } from 'react';
import { dbDonuts } from '/imports/api/donuts.js';
import { createContainer } from 'meteor/react-meteor-data';


class Donut extends Component {

  removeItem(event){
    event.preventDefault();
    dbDonuts.remove({"_id": this.props.donut._id})
  }

  render(){
    return (
      <li key={this.props.donut._id}>
        <span>{this.props.donut.name}</span>
        <a className="remove_donut" href="#" onClick={this.removeItem.bind(this)}>del</a>
      </li>
    )
  }
}

class DonutsCart extends Component {

  render(){
    return(
      <ul>
        {this.props.donuts.map(function(donut){
          return <Donut donut={donut}/>
        })
        }
      </ul>
    )
  }
}

export default DonutsMenuContainer = createContainer(() => {
  return { donuts: dbDonuts.find({}).fetch() };
}, DonutsCart)
