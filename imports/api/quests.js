import { Mongo } from 'meteor/mongo';
export const dbQuests = new Mongo.Collection('quests');



// dbQuests.insert({
//   name: "New-York",
//   duration: 20,
//   img: "/images/New-York.jpg",
//   locations: [
//     {
//       name: "airport",
//       img: "url-img",
//       vocabulary: [{text: "aisle"},{text: "aisle"}],
//       description: "Welcome to airport",
//       conversation: "right now conversation"
//     },
//     {
//       name: "Time Square",
//       img: "url-img",
//       vocabulary: [{text: "aisle"},{text: "aisle"}],
//       description: "Welcome to Time Square",
//       conversation: "right now conversation"
//     }
//   ]
// });
