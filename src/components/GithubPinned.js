import React, { useEffect, useState } from "react";

import { Card, Icon } from "semantic-ui-react";

function GithubPinnedItem({ title, description, stars, language, url }) {
  const openRepo = () => {
    window.open(url, "_blank");
  };
  return (
    <Card onClick={openRepo}>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="circle" />
          {language}
        </span>
        <span className="githubpinned__item-star">
          <Icon name="star" />
          {stars}
        </span>
      </Card.Content>
    </Card>
  );
}

function GithubPinned({ username }) {
  const [pinnedRepos, setPinnedRepos] = useState([]);

  useEffect(() => {
    fetch(`https://gh-pinned-repos.now.sh/?username=${username}`)
      .then((response) => response.json())
      .then((data) => setPinnedRepos(data));
  }, [username]);

  return (
    <Card.Group itemsPerRow={3}>
      {pinnedRepos.map((repo, key) => {
        return (
          <GithubPinnedItem
            title={repo.repo}
            description={repo.description}
            stars={repo.stars}
            language={repo.language}
            url={`https://github.com/${repo.owner}/${repo.repo}/`}
            key={key}
          />
        );
      })}
    </Card.Group>
  );
}

export default GithubPinned;