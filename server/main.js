import { Meteor } from "meteor/meteor";
import { dbQuests, dbQuestsScenario } from "../imports/api/quests.js";

Meteor.publish("userData", function() {
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId });
  } else {
    this.ready();
  }
});

Meteor.publish("quests", function() {
  return dbQuests.find({});
});

Meteor.publish("scenario", function() {
  return dbQuestsScenario.find({});
});
