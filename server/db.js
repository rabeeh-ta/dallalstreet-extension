const { Client } = require('pg');
require('dotenv').config();

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
-------------------------------------------------
    connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
*/

//? query and get everything in db
var getAllCompany = function () {
  return new Promise((resolve, reject) => {
    client.query('SELECT * FROM companies;', (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
};

//? query from a specific date
var getCompany = function (name, symbol, date) {
  return new Promise((resolve, reject) => {
    client.query('INSERT INTO ');
  });
};

//? add new company to the db
var addCompany = function (name, symbol) {
  let date = new Date().toISOString().slice(0, 10);

  return new Promise((resolve, reject) => {
    client.query(
      'INSERT INTO companies (name,smbol,added_date) VALUES ($1,$2,$3)',
      [name, symbol, date],
      (err, res) => {
        if (err) {
          reject('error');
          console.log(err);
        } else {
          resolve(res.rows);
        }
      }
    );
  });
};

module.exports = { getAllCompany, getCompany, addCompany };
