const csv = require('../node_modules/csv-parser');
const axios = require('../node_modules/axios');
const fs = require('fs');
const results = [];

// get all the data
fs.createReadStream('./cleanData.csv')
  .pipe(csv({}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    for (n in results) {
      data = {
        name: results[n]['Company Name'],
        symbol: results[n]['Ticker Symbol'],
      };
      //console.log(data);
      axios
        .post('https://dallalstreet-api.herokuapp.com/companies/add', data)
        .then((response) => console.log(response.status));
    }
  });

function upload(params) {}
