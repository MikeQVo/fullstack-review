const express = require('express');
const bodyParser = require('body-parser');
const get = require('../helpers/github');
const mongo = require('../database/index');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.sendStatus(200);
  console.log(req.body);
  get.getReposByUsername(req.body.name);
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  mongo.Repo.find({ name: req.body.name })
    .sort({ date: -1 })
    .then(repos => res.json(repos))
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

