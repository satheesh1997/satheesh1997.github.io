import React from "react";
import { Container, Item } from "semantic-ui-react";

function Experiences({ experiences }) {
  return (
    <Container>
      <Item.Group>
        {experiences.map((experience, key) => {
          return (
            <Item>
              <Item.Content key={key}>
                <Item.Header>{experience.role}</Item.Header>
                <Item.Meta>
                  <span className="price">
                    {experience.employeer} ({experience.year})
                  </span>
                </Item.Meta>
                <Item.Description>{experience.description}</Item.Description>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Container>
  );
}

export default Experiences;
