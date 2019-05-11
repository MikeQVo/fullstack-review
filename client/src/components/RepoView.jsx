import React from 'react';

const RepoView = (props) => {
  const repos = props.repos;
  const reposList = repos.map((repo) =>
    <li key={repo.id}>
      {repo.name} | {repo.url} | {repo.author} | {repo.date}
    </li>
  );
  return (
    <ul>{reposList}</ul>
  );
}

export default RepoView;