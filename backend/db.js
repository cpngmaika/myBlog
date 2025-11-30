const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "myblog",
  password: "pgmmg",
  port: 5432,
});

module.exports = pool;