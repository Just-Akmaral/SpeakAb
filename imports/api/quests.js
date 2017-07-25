import { Mongo } from 'meteor/mongo';
export const dbQuests = new Mongo.Collection('quests');



// dbQuests.insert({
//   name: "New-York",
//   duration: 20,
//   img: "/images/New-York.jpg",
//   locations: [
//     {
//       id: "New-York_airport",
//       name: "airport",
//       img: "url-img",
//       vocabulary: [{text: "aisle"},{text: "aisle"}],
//       description: "Welcome to airport",
//       conversation: "right now conversation"
//     },
//     {
//       id: "New-York_TimeSquare",
//       name: "Time Square",
//       img: "url-img",
//       vocabulary: [{text: "aisle"},{text: "aisle"}],
//       description: "Welcome to Time Square",
//       conversation: "right now conversation"
//     }
//   ]
// });
