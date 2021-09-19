const pkg = require('pg');
const { Pool } = pkg;

const pool = new Pool({
  user: "iwriterp_iwriteradmin",
  password: "iwriteradmin",
  host: "localhost",
  port: 5432,
  database: "iwriterp_iwriterpro"
});

module.exports = pool
