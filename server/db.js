const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'dallalstreet',
  password: 'rabeeh',
  port: 5432,
});
client.connect();

// list everything
function listAllStocks() {
  client.query('SELECT * FROM COMPANY;', (err, res) => {
    client.end();
    return res.rows;
  });
}

listAllStocks();

module.exports = { listAllStocks };
