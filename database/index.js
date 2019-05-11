const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date
  },
  author: {
    type: String,
    required: true
  },
  url: {
    type: String
  }
});

module.exports.Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // This function should save a repo or repos to
  // the MongoDB
  for(var i = 0; i < repos.length; i++) {
    const newRepo = new module.exports.Repo({
      name: repos[i].name,
      date: repos[i].updated_at,
      author: repos[i].owner.login,
      url: repos[i].html_url
    })

    newRepo.save().then(repo => console.log(repo));
  }
}

module.exports.save = save;
