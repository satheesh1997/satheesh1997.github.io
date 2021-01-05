import React from "react";
import { Container, Header, Progress } from "semantic-ui-react";

function Skills() {
  return (
    <Container>
      <div className="skill_container">
        <Header as="h5">Python</Header>
        <Progress percent={90} color="black" active size="small"></Progress>
      </div>
      <div className="skill_container">
        <Header as="h5">Django, Flask & Tornado</Header>
        <Progress percent={90} color="black" active size="small"></Progress>
      </div>
      <div className="skill_container">
        <Header as="h5">JavaScript</Header>
        <Progress percent={85} color="black" active size="small"></Progress>
      </div>
      <div className="skill_container">
        <Header as="h5">React</Header>
        <Progress percent={75} color="black" active size="small"></Progress>
      </div>
    </Container>
  );
}

export default Skills;