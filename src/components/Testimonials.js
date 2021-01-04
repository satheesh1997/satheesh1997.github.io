import React from "react";
import { Container, Item } from "semantic-ui-react";

function Testimonials() {
  return (
    <Container>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Deepak Mishra</Item.Header>
            <Item.Meta>
              <span className="price">Engineering Manager, HackerEarth</span>
            </Item.Meta>
            <Item.Description>
              Satheesh is a rare breed of engineer who has far more technical
              expertise than his experience. For around one year experienced, he
              takes a lot of responsibilities and does well in all of them. He
              is one of the junior-most team members, but he gives his teammates
              a run for the money...
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default Testimonials;
