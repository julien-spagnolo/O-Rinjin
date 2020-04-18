import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Segment, Form, TextArea, Feed, Grid, Icon, Label, Image, Divider, Button,
} from 'semantic-ui-react';

import './style.scss';
import logo from '../../../assets/images/logo.png';

const ServiceDetails = ({ /* service */ }) => {
  /*console.log(service);*/
  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h1">{/*service.title*/}Titre du Service</Header>
        <Container>
          <Label>
            Proposition
          </Label>
          <Label>
            Jardinage
          </Label>
        </Container>
        <Container className="service__details__avatar">
          <Image src={logo} size="tiny" />
          <p>Nom du Membre</p>
          <p>Code Postal - Ville</p>
        </Container>
        <Divider horizontal>
          <Header as="h5">
            Description
          </Header>
        </Divider>
        <Container>
          <p>Texte détaillé de description du service proposé ou demandé</p>
        </Container>
        <Divider horizontal>
          <Header as="h5">
            Photo
          </Header>
        </Divider>
        <Container>
          <Image src={logo} />
        </Container>
        <Divider horizontal>
          <Header as="h5">
            Réponses
          </Header>
        </Divider>
        <Container>
          <Feed>
            <Feed.Event>
              <Feed.Label image={logo} />
              <Feed.Content>
                <Feed.Date>3 days ago</Feed.Date>
                <Feed.Summary>
                  <a>Membre 1</a>
                </Feed.Summary>
                <Feed.Extra text>
                  Réponse 1
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label image={logo} />
              <Feed.Content>
                <Feed.Date>3 days ago</Feed.Date>
                <Feed.Summary>
                  <a>Membre 2</a>
                </Feed.Summary>
                <Feed.Extra text>
                  Réponse 2
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Container>
        <Divider horizontal>
          <Header as="h5">
            Se proposer
          </Header>
        </Divider>
        <Container>
          <Form>
            <TextArea placeholder="Envoyer une réponse" />
            <Button className="service__details__button" onClick={console.log('coucou')}>Envoyer</Button>
          </Form>
        </Container>
      </Segment>
    </Container>
  );
};

/* ServiceDetails.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default ServiceDetails;
