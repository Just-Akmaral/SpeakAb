import { Meteor } from 'meteor/meteor';
//import '../imports/api/donuts.js'

import {dbDonuts, dbDonutsMenu} from '../imports/api/donuts.js';

Meteor.publish("userData", function () {
        if (this.userId) {
            return Meteor.users.find({_id: this.userId});
        } else {
            this.ready();
}});

Meteor.publish("donuts", function () {
        console.log(dbDonuts);
        return dbDonuts.find({});
});

Meteor.publish("donuts_menu", function () {
        return dbDonutsMenu.find({});
});
