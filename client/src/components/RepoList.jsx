import React from 'react';
import RepoView from './RepoView.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <h4> {props.repos.author}'s Repos</h4>
    <RepoView repos={props.repos} />
  </div>
)

export default RepoList;