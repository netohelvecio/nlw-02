import { createConnection, Connection } from 'typeorm';

async function databaseConnection(): Promise<Connection> {
  try {
    const connection = await createConnection();

    return connection;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
}

export default databaseConnection;
