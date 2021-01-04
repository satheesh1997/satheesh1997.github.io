import React from "react";
import { Container, List, Rating } from "semantic-ui-react";

function Languages() {
  return (
    <Container>
      <List>
        <List.Item>
          <List.Content>
            <List.Header as="h5">English</List.Header>
            <List.Description>
              <Rating maxRating={5} defaultRating={4} icon="star" size="huge" />
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as="h5">Tamil</List.Header>
            <List.Description>
              <Rating maxRating={5} defaultRating={5} icon="star" size="huge" />
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default Languages;
