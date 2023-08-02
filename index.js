const express = require('express');
const app = express();
const port = 3000;

const library = require('./routes/library');
const connection = require('./database.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/apis/library', library);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
});