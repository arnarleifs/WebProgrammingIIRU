import { executeQuery } from "../db/index.js";
import { ObjectId } from 'mongodb';

export const getEvents = () => executeQuery(client => client.collection('events').find({}).toArray());

export const addUserToEvent = async (eventId, user) => {
  const { username } = user;
  return await executeQuery(async client => {
    const event = await client.collection('events').findOne({ _id: new ObjectId(eventId) });

    // Don't add the same user twice
    if (event.attendees.some(a => a.username === username)) { return; }
    // Don't add the user if the maximum has been reached
    if (event.attendees.length === event.maximum) { return; }

    await client.collection('events').updateOne({
      _id: new ObjectId(eventId)
    }, {
      "$push": {
          "attendees": user
      }
    });

    return true;
  });
}

export const createEvent = event => executeQuery(async client => {
  const res = await client.collection('events').insertOne({
    ...event,
    attendees: []
  });
  return res;
});