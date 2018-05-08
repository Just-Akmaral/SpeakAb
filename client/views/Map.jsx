import React, { Component } from "react";
import { dbQuests } from "/imports/api/quests.js";
import { createContainer } from "meteor/react-meteor-data";

class Locations extends Component {
  render() {
    return (
      <a
        href={"/Introduction/" + this.props.location_item.id}
        className={
          "map__location map__location--" +
          this.props.location_item.name.toLowerCase()
        }
      >
        <h3 className="map__title">{this.props.location_item.name}</h3>
      </a>
    );
  }
}

class Map extends Component {
  render() {
    if (!this.props.city) {
      return null;
    } else {
      return (
        <main className="container clearfix">
          <div className="breadcrumbs">
            <ul>
              <li>
                <a href="/Dashboard/" className="breadcrumbs__link">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="breadcrumbs__link breadcrumbs__link--current">
                  {this.props.city.name}
                </a>
              </li>
            </ul>
          </div>
          <h1 className="h1">Choose one location</h1>
          <section className="map">
            {this.props.city.locations.map(loc => (
              <Locations key={loc.id} location_item={loc} />
            ))}
          </section>
        </main>
      );
    }
  }
}

export default (MapContainer = createContainer(props => {
  return {
    city: dbQuests.findOne({ _id: props.quest_id })
  };
}, Map));
