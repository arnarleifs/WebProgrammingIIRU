import { executeQuery } from '../db/index.js';
import crypto from 'crypto';
import toonAvatar from 'cartoon-avatar';

const salt = '38be9557bf74efce362a4d4f5d166ac9';

const doesUserExist = async username => {
  return executeQuery(async client => {
    const user = await client.collection('users').findOne({ username: username.toLowerCase() });
    return user ? true : false;
  });
};

const hash = str => crypto.pbkdf2Sync(str, salt,  
  1000, 64, 'sha512').toString('hex')

export const registerUser = async (username, displayName, password) => {
  if (await doesUserExist(username)) { return; }

  return executeQuery(async client => {
    const result = await client.collection('users').insertOne({
      username: username.toLowerCase(),
      displayName,
      password: hash(password),
      avatar: toonAvatar.generate_avatar()
    });
    return result.acknowledged;
  });
};

export const authenticateUser = async (username, password) => {
  if (!(await doesUserExist(username))) { return false; }
  return await executeQuery(async client => await client.collection('users').findOne({
    username: username.toLowerCase(),
    password: hash(password)
  }));
}