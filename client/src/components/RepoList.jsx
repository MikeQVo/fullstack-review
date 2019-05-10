import React from 'react';
import RepoView from './RepoView.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <h5> {props.repos.author}'s Repos</h5>

  </div>
)

export default RepoList;