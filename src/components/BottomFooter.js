import React from "react";
import { Container } from "semantic-ui-react";

function BottomFooter() {
  return (
    <Container textAlign="center" className="bottomfooter">
      © {new Date().getFullYear()} Satheesh Kumar - Powered by Semantic UI
    </Container>
  );
}

export default BottomFooter;
