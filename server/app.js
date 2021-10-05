const express = require('express');
const app = express();
const db = require('./db');

// give the info on how to use the api
app.get('/', (req, res) => {
  res.send('to get the newest companies .get() /date/dd-mm-yyyy');
});

// query ALL the companies
app.get('/companies', (req, res) => {
  db.getAllCompany().then(
    (data) => res.send(data),
    (error) => res.send(error)
  );
});

// query companies from a given date
app.get('/companies/from/:date', (req, res) => {
  res.send('pass the date');
  db.getAllCompany().then(
    (resolve) => console.log(resolve),
    (reject) => console.log(reject)
  );
  console.log(req.params.date);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
