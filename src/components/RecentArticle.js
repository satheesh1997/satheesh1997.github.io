import React from "react";
import { Container, Image, Header, Button } from "semantic-ui-react";

function RecentArticle({ article, articles_url }) {
  const moreArticles = () => {
    window.open(articles_url, "_blank");
  };
  return (
    <Container className="recent_article">
      <Image src={article.image} centered />
      <Header as="h3" disabled content={article.title} />
      <p>{article.description}</p>
      <Button secondary size="tiny" onClick={moreArticles}>
        More Articles
      </Button>
    </Container>
  );
}

export default RecentArticle;
