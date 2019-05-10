import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Request from 'request';
import rp from 'request-promise';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    let optionsPost = {
      method: 'POST',
      uri: '/repos',
      form: {
        value: term
      }
    }

    let optionsGet = {
      method: 'GET',
      uri: `/repos/${term}`
    }

    rp(optionsPost)
      .then(() => {
        rp(optionsGet)
          .then((repos) => {
            this.state.repos = repos;
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));