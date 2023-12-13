// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'demo-database.ceedfewvgpkb.us-east-1.rds.amazonaws.com',
  database: 'sample-db2',
  password: "12345678",
  port: 5432,
  ssl:{
    rejectUnauthorized:false
  }
});

module.exports = pool;
