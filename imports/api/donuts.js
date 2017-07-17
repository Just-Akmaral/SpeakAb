import { Mongo } from 'meteor/mongo';
export const dbDonuts = new Mongo.Collection('donuts');
export const dbDonutsMenu = new Mongo.Collection('donuts_menu');