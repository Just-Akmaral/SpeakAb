import { Mongo } from 'meteor/mongo';

export const dbQuests = new Mongo.Collection('quests');
export const dbQuestsScenario = new Mongo.Collection('scenario');

/*dbQuests.remove();
dbQuestsScenario.remove();

 dbQuestsScenario.insert(
    {
      name: "New-York_Hotel",
      congratulation: "You was so good in Hotel",
      tasks: [
         {
           user_phrase: "sorry i don't understand",
           bot_phrase: "do you speak english?",
           hint: "say that you are sorry and you don't understand",
           words: ["sorry", "understand", "don't", "i"]
         },
         {
           user_phrase: "hello how are you",
           bot_phrase: "hi",
           hint: "say hello and ask how you are",
           words: ["hello", "how", "are", "you"]
         },
         {
           user_phrase: "i don't know",
           bot_phrase: "where can i buy a ticket",         
           hint: "say that you don't know",
           words: ["know", "don't", "i"]
         }
       ],
      video: "https://youtu.be/5SHNBFfdTZ0"
   }
  );

  dbQuestsScenario.insert(
   {
    name: "New-York_Airport",
    congratulation: "You was so good in airport",
    tasks: [
       {
         user_phrase: "sorry i don't understand",
         bot_phrase: "do you speak english?",
         hint: "say that you are sorry and you don't understand",
         words: ["sorry","understand","don't","i"]
       },
       {
         user_phrase: "hello how are you",
         bot_phrase: "hi",
         hint: "say hello and ask how you are",
         words: ["hello","how","are","you"]
       },
       {
         user_phrase: "i don't know",
         bot_phrase: "where can i buy a ticket",         
         hint: "say that you don't know",
         words: ["know","don't","i"]
       }
     ],
    video: "https://www.youtube.com/watch?v=y-xpjDLdr4w"
   }
 );
 

dbQuests.insert(
  {
   name: "New York",
   duration: 20,
   img: "/images/New-York.jpg",
   locations: [
     {
       id: "New-York_airport",
       name: "Airport",
       img: "url-img",
       vocabulary: [
         {english: "ticket", russian: "билет"},
         {english: "aisle", russian: "проход"}
       ],
       description: "Welcome to airport",
       conversation: "right now conversation"
     },
     {
       id: "New-York_Hotel",
       name: "Hotel",
       img: "url-img",
       vocabulary: [
         {english: "ticket", russian: "билет"},
         {english: "aisle", russian: "проход"}
       ],
       description: "Welcome to Hotel",
       conversation: "right now conversation"
     }
   ]
  }
);
*/