import { Mongo } from 'meteor/mongo';

export const dbQuests = new Mongo.Collection('quests');
export const dbQuestsScenario = new Mongo.Collection('scenario');

/*
dbQuests.remove({});
dbQuestsScenario.remove({});
*/

 dbQuestsScenario.insert(
    {
      name: "New_York_Airport",
      congratulation: "Good job! Press to move on to the next task",
      tasks: [
        {
           user_phrase: [ 
           "Excuse me what terminal is this",
           "Excuse me which terminal is that",
           "Excuse me which terminal is this",
           "Excuse me what terminal is that",
           "Excuse me which terminal are we at",
           "Excuse me what terminal are we at",
           "Excuse me where are we"
           ],
           bot_phrase: "Good day. What is the purpose of your visit? Welcome to John Franklin Kennedy International Airport. How can I help you? I am traveling.",
           hint: "JFK has 8 terminals. Ask a stewardess which terminal you are at. Note that the polite way to ask a question is to start it with the 'Excuse me'",
           words: ["that/this", "what/which", "terminal","arrive","is/at","excuse"]
         },
        {
           user_phrase: [
           "So where should I go now",
            "Where should I go",
            "What is next",
            "What’s next"
           ],
           bot_phrase: "This is terminal number one. Is there anything else I can help you with?",
           hint: "Ask the flight attendant where you should go next",
           words: ["where", "go", "should","i","so","now"]
        },
        {
           user_phrase: ["Thank you", "Thanks a lot", "Thanks","Thank you so much", "Thank you very much", "Thanks very much", "It's nice of you", "It is nice of you"],
           bot_phrase: "Go straight, then turn left, then turn right. Oh, anyways, you should follow the signs and other passengers.",         
           hint: "Thank the person",
           words: ["thank", "you", "so much"]
         }
       ],
      video: "https://youtu.be/5SHNBFfdTZ0"
   }
  );

   dbQuestsScenario.insert(
    {
      name: "New_York_Taxi",
      congratulation: "Well done! Moving to the next one?",
      tasks: [
         {
           user_phrase: [
           "Excuse me where can I get a taxi",  
           "Where can I get a taxi",
           "Excuse me where is the taxi",
           "Where is the taxi",
           "Sorry where can I get a taxi", 
           "Sorry where is the taxi"
           ],
           bot_phrase: "Good day. What is the purpose of your visit?  Hi, how may I help you?",
           hint: "Ask where you can find a taxi",
           words: [
            "where",
            "can",
            "get",
            "a taxi",
            "excuse me",
            "I"
           ]
         },
         {
           user_phrase: [
            "Can you take me to the fifth Avenue",
            "Can you take me to 5th Avenue",
            "Take me to fifth Avenue",
            "Take to fifth Avenue"
           ],
           bot_phrase: "You’ve already found it! I’m a taxi driver. Where can I take you?",
           hint: "Tell the driver to take you to 5th Avenue",
           words: [
            "can",
            "take to",
            "fifth avenue",
            "me",
            "you",
            "me"
            ]
         },
       {
           user_phrase: [
            "Ok here is hundred dollars",
            "That is ok here is hundred dollars",
            "That’s ok here is hundred dollars",
            "It is ok here is hundred dollars",
            "It’s ok here is hundred dollars"
           ],
           bot_phrase: "Yeah, sure! It’ll cost you 56 dollars.",
           hint: "You’re ready to pay, but you only have 100s",
           words: [
            "that’s",
            "here",
            "ok",
            "is",
            "hundred",
            "dollars",
            ]
         },
         {
           user_phrase: [            
            "Thank you Keep the rest",
            "Thanks a lot Keep the rest",
            "Thanks Keep the rest",
            "Thank you so much Keep the rest",
            "Thank you very much Keep the rest",
            "Thanks very much Keep the rest"
            ],
           bot_phrase: "Okay. Here are your 44 dollars.",
           hint: "Thank the person and tell them to keep the change.",
           words: [
            "thank",
            "rest",
            "keep",
            "you",
            "so much",
            "the"
          ]
         }
       ],
      video: "https://youtu.be/5SHNBFfdTZ0"
   }
  );
 dbQuestsScenario.insert(
    {
      name: "New_York_Museum",
      congratulation: "You’ve completed this task, now you can move on to the next one",
      tasks: [
         {
           user_phrase: [
           "Sorry where’s the entrance to a Museum of modern art",
           "Sorry where is the entrance to a Museum of modern art",
           "Excuse me where's the entrance to a Museum of modern art",
           "Excuse me where is the entrance to a Museum of modern art",
           "Sorry where’s the entrance to a Museum of art",
           "Sorry where is the entrance to a Museum of art",
           "Excuse me where's the entrance to a Museum of art",
           "Excuse me where is the entrance to a Museum of art",
           "Sorry where’s the entrance to a Museum",
           "Sorry where is the entrance to a Museum",
           "Excuse me where's the entrance to a Museum",
           "Excuse me where is the entrance to a Museum",
           "Sorry where’s an entrance to a Museum of modern art",
           "Sorry where is an entrance to a Museum of modern art",
           "Excuse me where's an entrance to a Museum of modern art",
           "Excuse me where is an entrance to a Museum of modern art",
           "Sorry where’s an entrance to a Museum of art",
           "Sorry where is an entrance to a Museum of art",
           "Excuse me where's an entrance to a Museum of art",
           "Excuse me where is an entrance to a Museum of art",
           "Sorry where’s an entrance to a Museum",
           "Sorry where is an entrance to a Museum",
           "Excuse me where's an entrance to a Museum",
           "Excuse me where is an entrance to a Museum",
           ],
           bot_phrase: "Sorry?",
           hint: "You’ve just come to 11 West 53 Street and don’t see the entrance, ask for people’s help. Ask where the entrance to museum is politely.",
           words: [
            "sorry",
            "where",
            "the entrance",
            "a museum of modern art",
            "to",
            "is"
            ]
         },
         {
           user_phrase: [
           "Can I get two tickets",
           "Can I get two tickets please",
           "Can I buy two tickets",
           "Can I buy two tickets please",
           "Sorry can I get two tickets",
           "Sorry can I get two tickets please",
           "Sorry can I buy two tickets",
           "Sorry can I buy two tickets please",
           ],
           bot_phrase: "Welcome to a Museum of Modern art. How can I help you?",
           hint: "You entered the museum and got in line to buy your tickets. Buy two tickets for you and your friend. Do it using construction 'Can I…'",
           words: [
            "get",
            "can",
            "I",
            "two",
            "please",
            "tickets"
            ]
         },
         {
           user_phrase: [
            "Hello do you have any guided tours",
            "Do you have any guided tours",
            "Hello do you have guided tours",
            "Do you have guided tours",
           ],
           bot_phrase: "Here are your tickets. Enjoy and feel free to ask our clerks for any sort of help",
           hint: "You are inside. You feel passionate about impressionists and want to run through the exhibitions to find them. Ask clerk for any guided tours",
           words: [
            "do",
            "guided tours",
            "have",
            "you",
            "any",
            "sorry"
            ]
         }
       ],
      video: "https://youtu.be/5SHNBFfdTZ0"
   }
  );

//////////////////////Город
dbQuests.insert(
  {
   name: "New York",
   duration: 20,
   locations: [
     {
       id: "New_York_Airport",
       name: "Airport",
       img: "url-img",
       vocabulary: [
         {english: "Terminal", russian: "Терминал"},
         {english: "Flight attendant", russian: "Бортпроводник"},
         {english: "Customs", russian: "Таможня"},
         {english: "Booth", russian: "Стенд"},
         {english: "Carousel / baggage claim", russian: "Лента с багажом"},
         {english: "Stop over", russian: "Остановка"},
         {english: "Luggage", russian: "Багаж"}
       ],
       description: "You've just landed at JFK airport, NY. Get through the customs and find a way out.",
       conversation: "right now conversation"
     },
      {
       id: "New_York_Museum",
       name: "Museum",
       img: "url-img",
       vocabulary: [
         {english: "Line", russian: "Очередь"},
         {english: "Adults", russian: "Взрослые"},
         {english: "Seniors", russian: "Пожилые"},
         {english: "Clerk", russian: "Служащий"},
         {english: "Reproduction", russian: "Репродукция"},
         {english: "Painting", russian: "Картина"},
         {english: "Membership", russian: "Членство"}
       ],
       description: "You decided to visit some famous places in New York. Museum of modern art looks like a good option. Find an entrance, buy a tickets, check out the impressionists exhibition and buy some souvenirs.",
       conversation: "right now conversation"
     },
      {
       id: "New_York_Taxi",
       name: "Taxi",
       img: "url-img",
       vocabulary: [
         {english: "Trunk", russian: "багажник"},
         {english: "Change", russian: "сдача, размен"},
         {english: "Fee", russian: "оплата"},
         {english: "Baggage/luggage", russian: "багаж"},
         {english: "Seat belt", russian: "ремень безопасности"}
       ],
       description: "It's time to get you to the point of your destination. You caught a taxi, set in a car...",
       conversation: "right now conversation"
     }
   ]
  }
);
