import React from "react";
import { Container, Image, Header, Button } from "semantic-ui-react";

function RecentArticle({ article }) {
  const moreArticles = () => {
    window.open(article.url, "_blank");
  };
  return (
    <Container className="recent_article">
      <Image src={article.image} centered />
      <Header as="h3" disabled content={article.title} />
      <p>{article.description}</p>
      <Button basic color="black" size="tiny" onClick={moreArticles}>
        Read More
      </Button>
    </Container>
  );
}

export default RecentArticle;