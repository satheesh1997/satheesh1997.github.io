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
            <Label as="a" color={props.color} ribbon>
              About
            </Label>
            <Container>
              <p>{props.user.about}</p>
            </Container>
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Articles
            </Label>
            <RecentArticle
              article={props.recent_article}
              articles_url={props.user.articles_url}
            />
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Experiences
            </Label>
            <Experiences />
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Contributions
            </Label>
            <Contributions github_username={props.user.github_username} />
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Contact
            </Label>
            <ContactDetails />
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Skills
            </Label>
            <Skills />
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Testimonials
            </Label>
            <Testimonials testimonials={props.testimonials} />
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
              Institutions
            </Label>
            <Institutions />
          </Segment>
          <Segment raised>
            <Label as="a" color={props.color} ribbon>
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
