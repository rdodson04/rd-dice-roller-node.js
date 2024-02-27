const express = require('express');
const app = express();

const cors = require("cors")
const port = 3000;

var url = require('url');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))



app.get('/roll-dice', (req, res) => {
  const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});