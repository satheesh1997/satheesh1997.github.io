import React from "react";
import { Container, List } from "semantic-ui-react";

function ContactDetails() {
  return (
    <Container>
      <List>
        <List.Item className="contact-details__list-item">
          <List.Icon
            name="address book"
            className="contact-details__list-item-icon "
          />
          <List.Content>+91-9597264229</List.Content>
        </List.Item>
        <List.Item className="contact-details__list-item">
          <List.Icon name="mail" className="contact-details__list-item-icon " />
          <List.Content>mail@satheesh.dev</List.Content>
        </List.Item>
        <List.Item className="contact-details__list-item">
          <List.Icon
            name="globe"
            className="contact-details__list-item-icon "
          />
          <List.Content>https://satheesh.dev/</List.Content>
        </List.Item>
        <List.Item className="contact-details__list-item">
          <List.Icon
            name="marker"
            className="contact-details__list-item-icon "
          />
          <List.Content>Bengaluru, India</List.Content>
        </List.Item>
      </List>
    </Container>
  );
}

export default ContactDetails;
