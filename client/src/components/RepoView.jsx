import React from 'react';

const RepoView = (props) => {
  const repos = props.repos;
  const reposList = repos.map((repo) =>
    <li>
      {props.repos.name} | {props.repos.url} | {props.repos.author} | {props.repos.date}
    </li>
  );
  return (
    <ul>{reposList}</ul>
  );
}

export default RepoView;