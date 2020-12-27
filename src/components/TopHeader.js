import React from "react";
import {
  Grid,
  Segment,
  Header,
  Button,
  Icon,
  Container,
} from "semantic-ui-react";
import Logo from "../assests/logo.png";

const TopHeaderIcon = ({ name, onClickRedirect }) => {
  const openUrl = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Button
      secondary
      size={"mini"}
      className="topheader__social-list-button"
      onClick={() => openUrl(onClickRedirect)}
    >
      <Icon name={name} className="topheader__social-list-item-btn-icon" />
    </Button>
  );
};

function TopHeader({ props }) {
  const { user, socials } = props;
  const openContactForm = () => {
    window.open(user.contact_form_url, "_blank");
  };

  return (
    <Segment placeholder>
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          <Grid.Column className="topheader__column-left">
            <img src={Logo} alt={user.name} className="topheader__logo" />
          </Grid.Column>
          <Grid.Column className="topheader__column-center">
            <Header as="h1" className="topheader__header-name">
              {user.name}
            </Header>
            <Header as="h1" disabled className="topheader__header-title">
              {user.title}
            </Header>
            <Container className="topheader__social-list">
              {socials &&
                socials.map((social) => {
                  return (
                    <TopHeaderIcon
                      name={social.name}
                      onClickRedirect={social.url}
                    />
                  );
                })}
            </Container>
          </Grid.Column>
          <Grid.Column className="topheader__column-right">
            <Button secondary onClick={openContactForm}>
              <Icon name="paper plane" />
              &nbsp; Contact
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default TopHeader;
