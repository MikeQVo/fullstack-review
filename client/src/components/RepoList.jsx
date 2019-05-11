import React from 'react';
import RepoView from './RepoView.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <h4> {typeof props.repos}'s Repos</h4>
    <RepoView repos={props.repos} />
  </div>
)

export default RepoList;