import React from "react";
import { Container, List } from "semantic-ui-react";

function ContactDetails() {
  return (
    <Container>
      <List>
        <List.Item>
          <List.Icon name="address book" />
          <List.Content>+91-9597264229</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>mail@satheesh.dev</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="globe" />
          <List.Content>https://satheesh.dev/</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>Bengaluru, India</List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default ContactDetails;
