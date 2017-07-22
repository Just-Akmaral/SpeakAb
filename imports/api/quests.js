import { Mongo } from 'meteor/mongo';
// export const dbQuests = new Mongo.Collection('quests', {
//                                                           validator: { $or:
//                                                              [
//                                                                 { time: { $type: "data" } },
//                                                                 { img: { $type: "string" } },
//                                                                 { locations: { $type: "object" } }
//                                                              ]
//                                                           }
//                                                        });

export const dbQuests = new Mongo.Collection('quests');

// dbQuests.insert({
//   name: "New-York",
//   duration: 20,
//   locations: [
//     {
//       name: "airport",
//       img: "url-img"
//     }
//   ]
// });
