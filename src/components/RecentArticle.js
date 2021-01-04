import React from "react";
import { Container, Image, Header, Button } from "semantic-ui-react";

function RecentArticle({ article, articles_url }) {
  return (
    <Container className="recent_article">
      <Image src={article.image} centered />
      <Header as="h3" disabled content={article.title} />
      <p>{article.description}</p>
      <Button secondary size="tiny">
        More Articles
      </Button>
    </Container>
  );
}

export default RecentArticle;
