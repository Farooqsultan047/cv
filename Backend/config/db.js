const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // must match .env
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.log('DB Connection Error:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = db;