const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('to get the newest companies .get() /date/dd-mm-yyyy');
});
app.get('/date/:date', (req, res) => {
  res.send('Hello World!');
  console.log(req.params.date);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
