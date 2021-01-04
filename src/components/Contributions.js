import React from "react";
import { Container } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

function Contributions() {
  return (
    <Container>
      <GitHubCalendar username="satheesh1997">
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </Container>
  );
}

export default Contributions;
