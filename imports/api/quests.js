import { Mongo } from 'meteor/mongo';
export const dbQuests = new Mongo.Collection('quests');

// dbQuests.insert({
//   name: "New-York",
//   duration: 20,
//   img: "/images/New-York.jpg",
//   locations: [
//     {
//       name: "airport",
//       img: "url-img"
//     },
//     {
//       name: "Time Square",
//       img: "url-img"
//     }
//   ]
// });
