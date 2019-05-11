const express = require('express');
const bodyParser = require('body-parser');
const get = require('../helpers/github');
const mongo = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  res.sendStatus(200);
  get.getReposByUsername(req.body.name);
  res.end();
});

app.get('/repos', function (req, res) {
  mongo.Repo
    .find()
    .sort({ date: -1 })
    .then(repos => res.json(repos))
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

