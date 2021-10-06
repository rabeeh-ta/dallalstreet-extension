const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// give the info on how to use the api
app.get('/', (req, res) => {
  res.json({
    '/': 'info route',
    '/companies': 'list all the companies in db',
    '/companies/from/yyyy-mm-dd':
      'get all the companies listed after the given date',
    '/companies/add': '.post() new company (name,symbol,added_date)',
  });
});

// query ALL the companies
app.get('/companies', (req, res) => {
  db.getAllCompany()
    .then((succuss) => res.send(succuss))
    .catch((err) => res.send(err));
});

// query companies from a given date
app.get('/companies/from/:date', (req, res) => {
  res.send('pass the date');
  console.log(req.params.date);
});

app.post('/companies/add', (req, res) => {
  db.addCompany(req.body.name, req.body.symbol)
    .then((succuss) => res.send('new company added'))
    .catch((err) => res.send(err));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started at localhost:3000');
});
