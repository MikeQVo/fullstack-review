const request = require('request');
const rp = require('request-promise');
const config = require('../config.js');
const save = require('../database/index');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    type: 'owner',
    sort: 'updated',
    headers: {
      'User-Agent': 'request-promise',
      'Authorization': `token ${config.TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
    },
    json: true
  };

  rp(options)
    .then((repos) => {
      save(repos);
      console.log('user has %d repos', repos.length);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports.getReposByUsername = getReposByUsername;