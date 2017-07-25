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

// 
// {
//   "_id": "MafKmhxoXHxT2kgNy",
//   "name": "London",
//   "duration": 30,
//   "img": "/images/New-York.jpg",
//   "locations": [
//     {
//       "id": "London_BigBen",
//       "name": "Big Ben",
//       "img": "url-img",
//       "vocabulary": [
//         {
//           "text": "aisle"
//         },
//         {
//           "text": "aisle"
//         }
//       ],
//       "description": "Welcome to Big Ben",
//       "conversation": "right now conversation"
//     },
//     {
//       "id": "London_TimeSquare",
//       "name": "Cambridge",
//       "img": "url-img",
//       "vocabulary": [
//         {
//           "text": "aisle"
//         },
//         {
//           "text": "aisle"
//         }
//       ],
//       "description": "Welcome to Cambridge",
//       "conversation": "right now conversation"
//     }
//   ]
// }
