import React from "react";
import { Container } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const gitHubCalendarTheme = {
  background: "transparent",
  text: "#000",
  grade4: "hsl(0, 0%, 30%)",
  grade3: "hsl(0, 0%, 44%)",
  grade2: "hsl(0, 0%, 58%)",
  grade1: "hsl(0, 0%, 72%)",
  grade0: "#eee",
};

function Contributions() {
  return (
    <Container>
      <GitHubCalendar
        username="satheesh1997"
        blockSize={15}
        blockMargin={8}
        theme={gitHubCalendarTheme}
      >
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </Container>
  );
}

export default Contributions;
