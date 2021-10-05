const { Client } = require('pg');
require('dotenv');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();
/*
  user: 'postgres',
  host: 'localhost',
  database: 'dallalstreet',
  password: 'rabeeh',
  port: 5432,
*/

// query and get everything in db
var getAllCompany = function () {
  return new Promise((resolve, reject) => {
    client.query('SELECT * FROM users;', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
};

module.exports = { getAllCompany };
