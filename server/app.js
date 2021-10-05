const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('to get the newest companies .get() /date/dd-mm-yyyy');
});
app.get('/date/:date', (req, res) => {
  res.send('Hello World!');
  console.log(req.params.date);
});

app.listen(process.env.PORT || 3000, , () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
