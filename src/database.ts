import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "admin",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }

  client.query("SELECT NOW()", (clientError, clientResult) => {
    release();

    if (clientError) {
      return console.error("Error executing query", clientError.stack);
    }

    console.log(clientResult.rows);
  });
});

export default {
  query: (text: string, params: any) => pool.query(text, params),
};
