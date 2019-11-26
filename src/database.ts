import { Client } from "pg";

const client = new Client({
  host: "postgres",
  database: "postgres",
  port: 5432,
  user: "postgres",
  password: "admin",
  ssl: false,
  // eslint-disable-next-line
  statement_timeout: 30000,
});

client.connect((err: any) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

export default {
  query: (text: string, params: any) => client.query(text, params),
};
