import React from "react";
import { Container, List } from "semantic-ui-react";

function Institutions() {
  return (
    <Container>
      <List>
        <List.Item>
          <List.Icon name="graduation cap" />
          <List.Content>
            <List.Header as="h5">Amrita Vidyalayam</List.Header>
            <List.Description>
              Secondary & Higher Secondary (2005-2015)
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="graduation cap" />
          <List.Content>
            <List.Header as="h5">Sri Krishna College of Technology</List.Header>
            <List.Description>
              B.E Computer Science (2015-2019)
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default Institutions;
