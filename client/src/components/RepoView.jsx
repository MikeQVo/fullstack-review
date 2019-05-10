import React from 'react';

const RepoView = (props) => (
  <div>
    {props.repos.name} | {props.repos.url} | {props.repos.author} | {props.repos.date}
  </div>
)

export default RepoView;