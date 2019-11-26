// ./connectors/postgres.js
class PostgresConnector {
  connection: any = null;

  constructor(connection: object) {
    this.connection = connection;
  }

  closeConnection() {
    this.connection.close();
  }

  collection(collectionName: string) {
    // caching, batching and logging could be added here
    return this.connection.collection(collectionName);
  }
}

export default PostgresConnector;
