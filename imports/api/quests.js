import { Mongo } from 'meteor/mongo';
export const dbQuests = new Mongo.Collection('quests');



dbQuests.insert({
  name: "New-York",
  duration: 20,
  img: "/images/New-York.jpg",
  locations: [
    {
      id: "New-York_airport",
      name: "airport",
      img: "url-img",
      vocabulary: [{english: "ticket",russian:"билет"},{english: "aisle",russian:"проход"}],
      description: "Welcome to airport",
      conversation: "right now conversation"
    },
    {
      id: "New-York_TimeSquare",
      name: "Time Square",
      img: "url-img",
      vocabulary: [{english: "ticket",russian:"билет"},{english: "aisle",russian:"проход"}],
      description: "Welcome to Time Square",
      conversation: "right now conversation"
    }
  ]
},
{
  name: "London",
  duration: 30,
  img: "/images/New-York.jpg",
  locations: [
    {
      id: "London_BigBen",
      name: "Big Ben",
      img: "url-img",
      vocabulary: [
        {
          english: "ticket",
          russian: "билет"
        },
        {
          english: "aisle",
          russian: "проход"
        }
      ],
      description: "Welcome to Bigben",
      conversation: "right now conversation"
    },
    {
      id: "London_Cambridge",
      name: "Cambridge",
      img: "url-img",
      vocabulary: [
        {
          english: "square",
          russian: "площадь"
        },
        {
          english: "university",
          russian: "университет"
        }
      ],
      description: "Welcome to Cambridge",
      conversation: "right now conversation"
    }
  ]
});
