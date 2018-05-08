import React, { Component } from "react";
import { dbQuests } from "/imports/api/quests.js";
import { createContainer } from "meteor/react-meteor-data";

class Introduction extends Component {
  render() {
    if (!this.props.ret) {
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
                <a
                  href={"/Map/" + this.props.map_obj._id}
                  className="breadcrumbs__link"
                >
                  {this.props.map_obj.name}
                </a>
              </li>
              <li>
                <a className="breadcrumbs__link breadcrumbs__link--current">
                  {this.props.ret[0].name}
                </a>
              </li>
            </ul>
          </div>
          <section className="location ">
            <h1 className="h2">Situation</h1>
            <div className="location__description clearfix">
              <p className="text-important">{this.props.ret[0].description}</p>
              <div className="btns">
                <a
                  href={"/Conversation/" + this.props.location_id}
                  className="btn btn-primary"
                >
                  Start conversation
                </a>
                <a
                  href={"/Vocabulary/" + this.props.location_id}
                  className="btn btn-secondary"
                >
                  Show vocabulary
                </a>
              </div>
            </div>
          </section>
        </main>
      );
    }
  }
}

export default createContainer(props => {
  let loc_it = dbQuests.findOne(
    { "locations.id": props.location_id },
    { fields: { locations: true } }
  );

  let map_obj = dbQuests.findOne(
    { "locations.id": props.location_id },
    { fields: { _id: true, name: true } }
  );

  let ret = null;
  if (loc_it) {
    ret = loc_it["locations"].filter(obj => {
      return obj.id === props.location_id;
    });
  }

  return {
    ret,
    map_obj
  };
}, Introduction);
