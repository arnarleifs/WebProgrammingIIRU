import { MongoClient } from 'mongodb';
import config from './config.json' assert { type: 'json' };

export const executeQuery = async fn => {
  const client = new MongoClient(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    return await fn(client.db(config.databaseName));
  } catch (ex) {
    console.error(ex);
    throw ex;
  } finally {
    await client.close();
  }
};