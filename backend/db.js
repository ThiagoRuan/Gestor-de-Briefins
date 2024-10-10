import pkg from 'pg';
const { Client } = pkg;

export const db = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'bancobriefing',
  port: 5432,
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) => console.error("Connection error", err.stack));
