import React from "react";
import {
  Grid,
  Segment,
  Container,
  Label,
  Image,
  Header,
  Button,
  List,
  Progress,
  Item,
  Rating,
} from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import TopHeader from "./components/TopHeader";

function App() {
  const props = {
    user: {
      name: "Satheesh Kumar D",
      title: "Software Developer",
      contact_form_url: "https://contact.satheesh.dev/",
      about:
        "I am a Software Developer skilled in Python, Django, Flask, Java, and JavaScript. A strong engineering professional with a Bachelor of Engineering focused in Computer Science and strong engineering experience from HackerEarth.",
    },
    socials: [
      {
        name: "whatsapp",
        url: "https://api.whatsapp.com/send?phone=919597264229",
      },
      {
        name: "twitter",
        url: "https://twitter.com/git_push_tweet/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/satheesh1997/",
      },
      {
        name: "github",
        url: "https://github.com/satheesh1997",
      },
    ],
  };
  return (
    <div className="app">
      <TopHeader props={props} />
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
              <Container className="recent_article">
                <Image
                  src="https://miro.medium.com/max/700/1*RXEDFVThZhVfOmvSpG5LXw.jpeg"
                  centered
                />
                <Header as="h3" disabled>
                  How to build a simple bot using python?
                </Header>
                <p>
                  Nowadays there are small bots (simple software) that are
                  running which will do an action by processing the response and
                  sending back a response(eg. Slack Bot, Messenger Bot). To
                  build this kind of simple bots I have created a framework
                  called iaBot.
                </p>
                <Button secondary size="tiny">
                  More Articles
                </Button>
              </Container>
            </Segment>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Experiences
              </Label>
              <Container>
                <Item.Group>
                  <Item>
                    <Item.Content>
                      <Item.Header>Software Engineer</Item.Header>
                      <Item.Meta>
                        <span className="price">
                          HackerEarth (2019 - Present)
                        </span>
                      </Item.Meta>
                      <Item.Description>
                        Working as a Software Engineer in Core apps team which
                        maintains the HackerEarth Assessment & FaceCode product.
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
                        Worked in b2b team as an engineering intern. Have worked
                        on many engineering driven tasks & also have made nearly
                        80+ commits at the end.
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Container>
            </Segment>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Contributions
              </Label>
              <Container>
                <GitHubCalendar username="satheesh1997">
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </Container>
            </Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Contact
              </Label>
              <Container>
                <List>
                  <List.Item>
                    <List.Icon name="address book" />
                    <List.Content>+91-9597264229</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail" />
                    <List.Content>mail@satheesh.dev</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="globe" />
                    <List.Content>https://satheesh.dev/</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>Bengaluru, India</List.Content>
                  </List.Item>
                </List>
              </Container>
            </Segment>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Skills
              </Label>
              <Container>
                <div className="skill_container">
                  <Header as="h5">Python</Header>
                  <Progress percent={90} success></Progress>
                </div>
                <div className="skill_container">
                  <Header as="h5">Django, Flask & Tornado</Header>
                  <Progress percent={90} success></Progress>
                </div>
                <div className="skill_container">
                  <Header as="h5">JavaScript</Header>
                  <Progress percent={90} success></Progress>
                </div>
                <div className="skill_container">
                  <Header as="h5">React</Header>
                  <Progress percent={90} success></Progress>
                </div>
              </Container>
            </Segment>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Testimonials
              </Label>
              <Container>
                <Item.Group>
                  <Item>
                    <Item.Content>
                      <Item.Header>Deepak Mishra</Item.Header>
                      <Item.Meta>
                        <span className="price">
                          Engineering Manager, HackerEarth
                        </span>
                      </Item.Meta>
                      <Item.Description>
                        Satheesh is a rare breed of engineer who has far more
                        technical expertise than his experience. For around one
                        year experienced, he takes a lot of responsibilities and
                        does well in all of them. He is one of the junior-most
                        team members, but he gives his teammates a run for the
                        money...
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Container>
            </Segment>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Institutions
              </Label>
              <Container>
                <List>
                  <List.Item>
                    <List.Icon name="graduation cap" />
                    <List.Content>
                      <List.Header as="h5">Amrita Vidyalayam</List.Header>
                      <List.Description>
                        Secondary & Higher Secondary (2005-2015)
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="graduation cap" />
                    <List.Content>
                      <List.Header as="h5">
                        Sri Krishna College of Technology
                      </List.Header>
                      <List.Description>
                        B.E Computer Science (2015-2019)
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Container>
            </Segment>
            <Segment raised>
              <Label as="a" color="red" ribbon>
                Languages
              </Label>
              <Container>
                <List>
                  <List.Item>
                    <List.Content>
                      <List.Header as="h5">English</List.Header>
                      <List.Description>
                        <Rating
                          maxRating={5}
                          defaultRating={4}
                          icon="star"
                          size="huge"
                        />
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as="h5">Tamil</List.Header>
                      <List.Description>
                        <Rating
                          maxRating={5}
                          defaultRating={5}
                          icon="star"
                          size="huge"
                        />
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
