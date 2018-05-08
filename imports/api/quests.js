import { Mongo } from "meteor/mongo";

export const dbQuests = new Mongo.Collection("quests");
export const dbQuestsScenario = new Mongo.Collection("scenario");
