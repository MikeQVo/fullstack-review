import React, { Component } from 'react';
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
    rp({
      method: 'POST',
      uri: 'http://127.0.0.1:1128/repos',
      body: {
        name: term
      },
      json: true
    })
    .then((results) => {
      console.log('Successful Post', results);
      return (rp({
        method: 'GET',
        uri: `http://127.0.0.1:1128/repos`,
        json: true
      })
      .then((results) => {
        console.log('Successful Get', results);
        this.setState({
          repos: results
        })
      })
      .catch((err) => {
        console.log(err);
      }))
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