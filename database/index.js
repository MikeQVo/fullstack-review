const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
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
  for(var i = 0; i < repos.length; i++) {
    const newRepo = new module.exports.Repo({
      id: repos[i].id,
      name: repos[i].name,
      date: repos[i].updated_at,
      author: repos[i].owner.login,
      url: repos[i].html_url
    })

    newRepo.save().then(repo => console.log(repo));
  }
}

module.exports.save = save;
