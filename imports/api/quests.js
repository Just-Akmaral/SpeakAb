import { Mongo } from 'meteor/mongo';

export const dbQuests = new Mongo.Collection('quests');
export const dbQuestsScenario = new Mongo.Collection('scenario');


/*dbQuests.remove({});
dbQuestsScenario.remove({});*/

/*
 dbQuestsScenario.insert(
    {
      name: "New_York_Airport",
      congratulation: "You’ve completed this task, now you can move on to the next one",
      tasks: [
         {
           user_phrase: ["sorry i don't understand", "sorry i do not understand", "i am sorry i don't understand", "don't understand sorry", "do not understand sorry"],
           bot_phrase: "Ladies and gentlemen, welcome to John Franklin Kennedy International Airport",
           hint: "say that you are sorry and you don't understand",
           words: ["sorry", "understand", "don't", "i"]
         },
         {
           user_phrase: ["hello how are you","how are you hello","hi how are you", "how are you hi"],
           bot_phrase: "hi",
           hint: "say hello and ask how you are",
           words: ["hello", "how", "are", "you"]
         },
         {
           user_phrase: ["i don't know","i do not know",],
           bot_phrase: "where can i buy a ticket",         
           hint: "say that you don't know",
           words: ["know", "don't", "i"]
         }
       ],
      video: "https://youtu.be/5SHNBFfdTZ0"
   }
  );


dbQuests.insert(
  {
   name: "New York",
   duration: 20,
   img: "/images/New-York.jpg",
   locations: [
     {
       id: "New_York_Airport",
       name: "Airport",
       img: "url-img",
       vocabulary: [
         {english: "ticket", russian: "билет"},
         {english: "aisle", russian: "проход"}
       ],
       description: "Welcome to airport",
       conversation: "right now conversation"
     }
   ]
  }
);
*/