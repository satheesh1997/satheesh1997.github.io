import React from "react";
import { Container, Item } from "semantic-ui-react";

function Testimonial({ testimonial }) {
  const truncate = (str) => {
    return str.length > 150 ? str.substring(0, 140) + "..." : str;
  };
  const openLinkedin = () => {
    window.open(testimonial.linkedin, "_blank");
  };
  return (
    <Item>
      <Item.Content>
        <Item.Header onClick={openLinkedin} className="testimonial__user">
          {testimonial.name}
        </Item.Header>
        <Item.Meta onClick={openLinkedin} className="testimonial__user">
          <span className="price">
            {testimonial.role}, {testimonial.company}
          </span>
        </Item.Meta>
        <Item.Description>{truncate(testimonial.content)}</Item.Description>
      </Item.Content>
    </Item>
  );
}

function Testimonials({ testimonials }) {
  return (
    <Container>
      <Item.Group>
        {testimonials.map((testimonial, key) => {
          return <Testimonial testimonial={testimonial} key={key} />;
        })}
      </Item.Group>
    </Container>
  );
}

export default Testimonials;
