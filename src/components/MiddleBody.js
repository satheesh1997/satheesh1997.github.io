import React from "react";
import { Grid, Segment, Container, Label } from "semantic-ui-react";

import RecentArticle from "./RecentArticle";
import Experiences from "./Experiences";
import Contributions from "./Contributions";
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Institutions from "./Institutions";
import Languages from "./Languages";

function MiddleContainer({ props }) {
  return (
    <Grid columns={2} className="homepage">
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={11}>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              About
            </Label>
            <Container>
              <p>{props.user.about}</p>
            </Container>
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Articles
            </Label>
            <RecentArticle
              article={props.recent_article}
              articles_url={props.user.articles_url}
            />
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Experiences
            </Label>
            <Experiences />
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Contributions
            </Label>
            <Contributions />
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Contact
            </Label>
            <ContactDetails />
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Skills
            </Label>
            <Skills />
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Testimonials
            </Label>
            <Testimonials />
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Institutions
            </Label>
            <Institutions />
          </Segment>
          <Segment raised>
            <Label as="a" color="red" ribbon>
              Languages
            </Label>
            <Languages />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default MiddleContainer;
