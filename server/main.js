import { Meteor } from 'meteor/meteor';
import {dbQuests} from '../imports/api/quests.js';

Meteor.publish("userData", function () {
        if (this.userId) {
            return Meteor.users.find({_id: this.userId});
        } else {
            this.ready();
}});

Meteor.publish("quests", function () {
        console.log(dbQuests);
        return dbQuests.find({});
});
