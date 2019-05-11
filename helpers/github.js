const request = require('request');
const rp = require('request-promise');
const config = require('../config.js');
const mongo = require('../database/index');

let getReposByUsername = (username) => {
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos?per_page=25`,
    headers: {
      'User-Agent': 'request-promise',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    },
    type: 'owner',
    sort: 'updated',
    json: true
  };

  rp(options)
    .then((repos) => {
      mongo.save(repos);
      console.log('user has %d repos', repos.length);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports.getReposByUsername = getReposByUsername;