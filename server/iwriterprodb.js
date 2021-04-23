import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: "iwriteradmin",
  password: "iwriteradmin",
  host: "localhost",
  port: 5432,
  database: "iwriterpro"
});

