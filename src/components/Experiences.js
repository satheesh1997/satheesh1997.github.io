import React from "react";
import { Container, Item } from "semantic-ui-react";

function Experiences() {
  return (
    <Container>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Software Engineer</Item.Header>
            <Item.Meta>
              <span className="price">HackerEarth (2019 - Present)</span>
            </Item.Meta>
            <Item.Description>
              Working as a Software Engineer in Core apps team which maintains
              the HackerEarth Assessment & FaceCode product.
            </Item.Description>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header>Engineering Intern</Item.Header>
            <Item.Meta>
              <span className="price">HackerEarth (2018 - 2019)</span>
            </Item.Meta>
            <Item.Description>
              Worked in b2b team as an engineering intern. Have worked on many
              engineering driven tasks & also have made nearly 80+ commits at
              the end.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default Experiences;
