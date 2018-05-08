import React, { Component } from "react";
import { dbQuests, dbQuestsScenario } from "/imports/api/quests.js";
import { createContainer } from "meteor/react-meteor-data";

class Congratulation extends Component {
  render() {
    if (!this.props.conversation) return null;
    else {
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
                  {this.props.map_obj.name}{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="breadcrumbs__link breadcrumbs__link--current"
                >
                  {this.props.ret[0].name}
                </a>
              </li>
            </ul>
          </div>
          <section className="congrats">
            <h1 className="h1">Congratulations</h1>
            <p className="text-secondary">
              {this.props.conversation.congratulation}
            </p>
            <a
              href={"/Map/" + this.props.map_obj._id}
              className="btn btn-cta btn-primary"
            >
              To the next location
            </a>
          </section>
        </main>
      );
    }
  }
}

export default createContainer(props => {
  let conversation = dbQuestsScenario.findOne({ name: props.location_id });
  let map_obj = dbQuests.findOne(
    { "locations.id": props.location_id },
    { fields: { _id: true, name: true } }
  );

  let loc_it = dbQuests.findOne(
    { "locations.id": props.location_id },
    { fields: { locations: true } }
  );
  let ret = null;
  if (loc_it) {
    ret = loc_it["locations"].filter(obj => {
      return obj.id === props.location_id;
    });
  }

  return {
    conversation,
    map_obj,
    ret
  };
}, Congratulation);
