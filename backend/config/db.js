const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.getConnection()
  .then(() => {
    console.log('MySQL database connected successfully.');
  })
  .catch((err) => {
    console.error('MySQL connection failed:', err.message);
    process.exit(1); // Exit app on failure
  });

module.exports = db;